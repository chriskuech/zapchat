import { config } from "@/config";
import type { paths } from "@/zaproxy";
import createClient from "openapi-fetch";
import { cache } from "react";

export class ScannerError extends Error {}

const client = cache(() =>
  createClient<paths>({
    baseUrl: config().ZAP_BASE_URL,
    headers: {
      "X-ZAP-API-Key": config().ZAP_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
);

type StartSpiderScanParams = {
  url: string;
};

export async function startSpiderScan({ url }: StartSpiderScanParams) {
  // @ts-expect-error - bug in zaproxy openapi
  const { data, error } = await client().POST("/JSON/spider/action/scan/", {
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

export async function getVulnerabilities({ url }: GetVulnerabilitiesParams) {
  const { data, error } = await client().GET("/JSON/alert/view/alerts/", {
    params: {
      query: {
        baseurl: url,
        start: "0",
        count: `${Number.MAX_SAFE_INTEGER}`, // TODO: verify appropriate range or implement pagination
      },
    },
  });

  if (error) {
    throw new ScannerError("Failed to get vulnerabilities", { cause: error });
  }

  return data;
}
