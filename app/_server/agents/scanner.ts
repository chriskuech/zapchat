import {
  getActiveScanStatus,
  getSpiderScanStatus,
  getVulnerabilities,
  startActiveScan,
  startSpiderScan,
  Vulnerability,
} from "@/_server/scanner";
import { Annotation, StateGraph } from "@langchain/langgraph";
import assert from "assert";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Define the state schema
const StateAnnotation = Annotation.Root({
  url: Annotation<string | undefined>(),
  spiderScanId: Annotation<string | undefined>(),
  activeScanId: Annotation<string | undefined>(),
  scanResults: Annotation<Vulnerability[] | undefined>(),
});

// Build the graph
export const scannerAgent = new StateGraph(StateAnnotation)

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

  .addNode("getScanResults", async (state) => {
    assert(state.url, "URL is required");
    state.scanResults = await getVulnerabilities(state.url);

    return state;
  })

  // Define the execution flow
  .addEdge("__start__", "startSpider")
  .addEdge("startSpider", "waitForSpiderCompletion")
  .addEdge("waitForSpiderCompletion", "startActive")
  .addEdge("startActive", "waitForActiveCompletion")
  .addEdge("waitForActiveCompletion", "getScanResults")
  .addEdge("getScanResults", "__end__")

  .compile();
