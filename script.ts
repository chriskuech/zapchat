import { ZAPv2 } from "zaproxy";

// Create an instance of ZAP client
const zap = new ZAPv2({
  apiKey: "your_api_key", // Replace with your actual ZAP API key
  proxy: "http://localhost:8080", // ZAP proxy address (default)
});

const targetUrl = "https://juice-shop.herokuapp.com";

async function startSpiderScan() {
  try {
    console.log("Starting Spider Scan...");
    const spiderScan = await zap.spider.scan(targetUrl, 1, 5); // URL, Depth, Max Duration (in minutes)
    console.log("Spider Scan Started: ", spiderScan);
    return spiderScan;
  } catch (error) {
    console.error("Error starting spider scan:", error);
  }
}

async function startActiveScan() {
  try {
    console.log("Starting Active Scan...");
    const activeScan = await zap.ascan.scan(targetUrl); // Start active scan on the target URL
    console.log("Active Scan Started: ", activeScan);
    return activeScan;
  } catch (error) {
    console.error("Error starting active scan:", error);
  }
}

async function checkScanStatus(scanId: string) {
  try {
    console.log("Checking scan status...");
    let status: string;
    do {
      status = await zap.ascan.status(scanId);
      console.log(`Scan Status: ${status}%`);
      if (status !== "100") {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds before checking again
      }
    } while (status !== "100");
    console.log("Scan completed!");
  } catch (error) {
    console.error("Error checking scan status:", error);
  }
}

async function getVulnerabilities() {
  try {
    console.log("Retrieving vulnerabilities...");
    const alerts = await zap.alerts.getAlerts(targetUrl, 0, 10); // Get first 10 alerts for the target URL
    console.log("Vulnerabilities Found:");
    alerts.forEach((alert: any) => {
      console.log(`- ${alert.alert}: ${alert.url} (Risk: ${alert.riskdesc})`);
    });
  } catch (error) {
    console.error("Error retrieving vulnerabilities:", error);
  }
}

async function runScan() {
  try {
    // Start spider scan
    const spiderScan = await startSpiderScan();
    // Start active scan after spider scan starts
    const activeScan = await startActiveScan();
    // Check scan status
    await checkScanStatus(activeScan.scanId);
    // Retrieve vulnerabilities after scan completion
    await getVulnerabilities();
  } catch (error) {
    console.error("Error during scan process:", error);
  }
}

// Start the scan process
runScan();
