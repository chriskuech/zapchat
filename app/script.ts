/**
 * @fileoverview
 * This script runs a vulnerability scan on a given URL and prints the top 3 most important vulnerabilities.
 * You must provide a URL as an argument to the script, ex: `npx tsx ./app/script.ts https://juice-shop.herokuapp.com`
 *
 * @author [@chriskuech](https://github.com/chriskuech)
 * @version 0.0.1
 * @since 2025-02-12
 */
import dotenv from "dotenv";
dotenv.config();

import {
  getActiveScanStatus,
  getSpiderScanStatus,
  getVulnerabilities,
  startActiveScan,
  startSpiderScan,
  Vulnerability,
} from "@/_server/scanner";
import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import assert from "assert";
import { isString } from "remeda";
import YAML from "yaml";

// Disable debug logging
console.debug = () => {};

const spinnerTimer = (() => {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

  let i = 0;
  const fn = () => {
    process.stdout.write(`\r${frames[i]}`);
    i = (i + 1) % frames.length;
  };

  return setInterval(fn, 100);
})();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const llm = new ChatOpenAI({ modelName: "gpt-4o", temperature: 0 });

// Define the state schema
const StateAnnotation = Annotation.Root({
  input: Annotation<string | undefined>(),
  url: Annotation<string | undefined>(),
  spiderScanId: Annotation<string | undefined>(),
  activeScanId: Annotation<string | undefined>(),
  scanResults: Annotation<Vulnerability[] | undefined>(),
  summary: Annotation<string | undefined>(),
});

// Build the graph
const graphBuilder = new StateGraph(StateAnnotation)

  .addNode("promptUser", async (state) => {
    const userInput = process.argv.slice(2).join(" ");
    assert(
      userInput,
      "Please provide input containing a URL, ex: `npx tsx ./app/script.ts https://juice-shop.herokuapp.com`"
    );

    state.input = userInput;

    return state;
  })

  .addNode("extractUrl", async (state) => {
    assert(state.input, "Input is required");
    const { content } = await llm.invoke(
      `Extract the URL to run a vulnerability scan on from this text provided by the user: "${state.input}". Return ONLY the URL.`
    );
    console.debug(`Extracted URL: ${content}`);

    assert(isString(content), "Extracted URL is not a string");
    state.url = content.trim();

    return state;
  })

  .addNode("startSpider", async (state) => {
    assert(state.url, "URL is required");
    state.spiderScanId = await startSpiderScan(state.url);
    console.debug(
      `Started spider scan with ID: ${JSON.stringify(state.spiderScanId)}`
    );

    return state;
  })

  .addNode("waitForSpiderCompletion", async (state) => {
    assert(state.spiderScanId, "Spider scan ID is required");
    while (true) {
      const isComplete = await getSpiderScanStatus(state.spiderScanId);
      console.debug(`Spider scan status: ${JSON.stringify(isComplete)}`);

      if (isComplete) break;

      await sleep(5_000);
    }

    return state;
  })

  .addNode("startActive", async (state) => {
    assert(state.url, "URL is required");
    state.activeScanId = await startActiveScan(state.url);
    console.debug(
      `Started active scan with ID: ${JSON.stringify(state.activeScanId)}`
    );

    return state;
  })

  .addNode("waitForActiveCompletion", async (state) => {
    assert(state.activeScanId, "Active scan ID is required");
    while (true) {
      const isComplete = await getActiveScanStatus(state.activeScanId);
      console.debug(`Active scan status: ${JSON.stringify(isComplete)}`);

      if (isComplete) break;

      await sleep(5_000);
    }

    return state;
  })

  .addNode("summarizeFindings", async (state) => {
    assert(state.url, "URL is required");
    state.scanResults = await getVulnerabilities(state.url);
    assert(state.scanResults, "Scan results are required");

    console.debug(`Scan result count: ${state.scanResults}`);
    console.debug(
      `Scan results: ${JSON.stringify(state.scanResults, null, 2)}`
    );

    const totalResultCount = state.scanResults.length ?? 0;
    const expectedResultCount = Math.max(state.scanResults.length ?? 0, 3);

    const response = await llm.invoke(
      `Analyze these vulnerabilities and return the top ${expectedResultCount} most important vulnerabilities, based on \`riskScore\` (descending) then \`confidenceScore\` (descending).
      Because there are ${totalResultCount} vulnerabilities, you MUST return EXACTLY ${expectedResultCount} vulnerabilities, and these ${expectedResultCount} vulnerabilities MUST have the largest \`riskScore\` values of all the vulnerabilities.

      For each of the ${expectedResultCount} vulnerabilities, generate:
      - Severity rating
      - Clear, non-technical explanation
      - Potential impact
      - Basic remediation suggestions

      Return the output as ONLY JSON. The output MUST pass JSON.parse()!
      
      SCAN RESULTS: ${JSON.stringify(state.scanResults)}
      `,
      { response_format: { type: "json_object" } }
    );
    console.debug(`Summary: ${response.content}`);

    assert(isString(response.content), "Summary is not a string");
    state.summary = JSON.parse(response.content);

    return state;
  })

  .addNode("printSummary", async (state) => {
    clearInterval(spinnerTimer);
    console.log("Scan results: %d", state.scanResults?.length);
    console.log(YAML.stringify(state.summary, null, 2));

    return state;
  })

  // Define the execution flow
  .addEdge("__start__", "promptUser")
  .addEdge("promptUser", "extractUrl")
  .addEdge("extractUrl", "startSpider")
  .addEdge("startSpider", "waitForSpiderCompletion")
  .addEdge("waitForSpiderCompletion", "startActive")
  .addEdge("startActive", "waitForActiveCompletion")
  .addEdge("waitForActiveCompletion", "summarizeFindings")
  .addEdge("summarizeFindings", "printSummary")
  .addEdge("printSummary", "__end__");

graphBuilder.compile().invoke({}).catch(console.error);
