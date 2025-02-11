import "server-only";

import createClient from "openapi-fetch";
import { cache } from "react";
import { pipe, sortBy, take } from "remeda";
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

type StartSpiderScanParams = {
  url: string;
};

export async function startSpiderScan({ url }: StartSpiderScanParams) {
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

  return data;
}

type StartActiveScanParams = {
  url: string;
};

export async function startActiveScan({ url }: StartActiveScanParams) {
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

  return data;
}

type CheckScanStatusParams = {
  scanId: string;
};

export async function checkScanStatus({ scanId }: CheckScanStatusParams) {
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

  return data;
}

type GetVulnerabilitiesParams = {
  url: string;
};

const severities = ["Low", "Medium", "High", "Critical"] as const;
const SeveritySchema = z.enum(severities);

const AlertSchema = z.object({
  risk: SeveritySchema,
  confidence: SeveritySchema,
  name: z.string(),
  description: z.string(),
  other: z.string(),
  solution: z.string(),
});

const GetVulnerabilitiesResponseSchema = z.object({
  alerts: z.array(AlertSchema),
});

export async function getVulnerabilities({ url }: GetVulnerabilitiesParams) {
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
    sortBy((alert) => [
      -severities.indexOf(alert.risk),
      -severities.indexOf(alert.confidence),
    ]),
    take(3)
  );
}
