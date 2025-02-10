import { config } from "@/config";
import type { paths } from "@/zaproxy";
import createClient from "openapi-fetch";

const client = createClient<paths>({
  baseUrl: config().ZAP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-ZAP-API-Key": config().ZAP_API_KEY,
  },
});

type StartSpiderScanParams = {
  url: string;
};

export async function startSpiderScan({ url }: StartSpiderScanParams) {
  // @ts-expect-error - bug in zaproxy openapi
  const { data } = await client.POST("/JSON/spider/action/scan/", {
    params: {
      query: {
        url,
      },
    },
  });

  return data;
}

type StartActiveScanParams = {
  url: string;
};

export async function startActiveScan({ url }: StartActiveScanParams) {
  const { data } = await client.GET("/JSON/ascan/action/scan/", {
    params: {
      query: {
        url,
      },
    },
  });

  return data;
}

type CheckScanStatusParams = {
  scanId: string;
};

export async function checkScanStatus({ scanId }: CheckScanStatusParams) {
  const { data } = await client.GET("/JSON/ascan/view/status/", {
    params: {
      query: {
        scanId,
      },
    },
  });

  return data;
}

type GetVulnerabilitiesParams = {
  url: string;
};

export async function getVulnerabilities({ url }: GetVulnerabilitiesParams) {
  const { data } = await client.GET("/JSON/alert/view/alerts/", {
    params: {
      query: {
        baseurl: url,
        start: "0",
        count: `${Number.MAX_SAFE_INTEGER}`, // TODO: verify appropriate range or implement pagination
      },
    },
  });

  return data;
}
