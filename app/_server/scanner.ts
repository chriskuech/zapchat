import createClient from "openapi-fetch";
import { cache } from "react";
import { map, pipe, prop, sortBy, take } from "remeda";
import { z } from "zod";
import { config } from "./config";
import type { paths } from "./zaproxy";

export class ScannerError extends Error {}

const client = cache(() =>
  createClient<paths>({
    baseUrl: config().ZAP_BASE_URL,
    headers: {
      "X-ZAP-API-Key": config().ZAP_API_KEY,
      "Content-Type": "application/json",
    },
  })
);

/**
 * Start a spider scan on the given URL.
 *
 * @param url - The URL to scan.
 * @returns The ID of the spider scan.
 */
export async function startSpiderScan(url: string) {
  const { data, error } = await client().GET("/JSON/spider/action/scan/", {
    params: {
      query: {
        url,
      },
    },
  });

  if (error) {
    throw new ScannerError("Failed to start spider scan", { cause: error });
  }

  return z.object({ scan: z.string() }).parse(data).scan;
}

/**
 * Get the status of a spider scan.
 *
 * @param scanId - The ID of the spider scan.
 * @returns Whether the spider scan is complete.
 */
export async function getSpiderScanStatus(scanId: string) {
  const { data, error } = await client().GET("/JSON/spider/view/status/", {
    params: {
      query: {
        scanId,
      },
    },
  });

  if (error) {
    throw new ScannerError("Failed to get spider scan status", {
      cause: error,
    });
  }

  return z.object({ status: z.string() }).parse(data).status === "100";
}

/**
 * Start an active scan on the given URL.
 *
 * @param url - The URL to scan.
 * @returns The ID of the active scan.
 */
export async function startActiveScan(url: string) {
  const { data, error } = await client().GET("/JSON/ascan/action/scan/", {
    params: {
      query: {
        url,
      },
    },
  });

  if (error) {
    throw new ScannerError("Failed to start active scan", { cause: error });
  }

  return z.object({ scan: z.string() }).parse(data).scan;
}

/**
 * Get the status of an active scan.
 *
 * @param scanId - The ID of the active scan.
 * @returns Whether the active scan is complete.
 */
export async function getActiveScanStatus(scanId: string) {
  const { data, error } = await client().GET("/JSON/ascan/view/status/", {
    params: {
      query: {
        scanId,
      },
    },
  });

  if (error) {
    throw new ScannerError("Failed to check scan status", { cause: error });
  }

  return z.object({ status: z.string() }).parse(data).status === "100";
}

const severities = [
  "Informational",
  "Low",
  "Medium",
  "High",
  "Critical",
] as const;
const SeveritySchema = z.enum(severities);

const AlertSchema = z.object({
  risk: SeveritySchema,
  confidence: SeveritySchema,
  name: z.string(),
  description: z.string(),
  other: z.string(),
  solution: z.string(),
});

export type Vulnerability = z.infer<typeof AlertSchema>;

const GetVulnerabilitiesResponseSchema = z.object({
  alerts: z.array(AlertSchema),
});

/**
 * Get the vulnerabilities of a scan.
 *
 * @param url - The URL to scan.
 * @returns The vulnerabilities of the scan.
 */
export async function getVulnerabilities(url: string) {
  const { data, error } = await client().GET("/JSON/alert/view/alerts/", {
    params: {
      query: {
        baseurl: url,
        // TODO: verify appropriate range or implement pagination
        start: "0",
        count: `${Number.MAX_SAFE_INTEGER}`,
      },
    },
  });

  if (error) {
    throw new ScannerError("Failed to get vulnerabilities", { cause: error });
  }

  const { alerts } = GetVulnerabilitiesResponseSchema.parse(data);

  // TODO: this assumes "Top 3" vulnerabilities are rated by risk then confidence
  return pipe(
    alerts,
    map((alert) => ({
      ...alert,
      riskScore: severities.indexOf(alert.risk),
      confidenceScore: severities.indexOf(alert.confidence),
    })),
    sortBy([prop("riskScore"), "desc"], [prop("confidenceScore"), "desc"]),
    take(3)
  );
}
