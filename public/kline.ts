import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import { isNumber, isString } from "../deps.ts";
import type { HuobiPair } from "./types.ts";

const MARKET_HISTORY_KLINE = "/market/history/kline";

type KlineOptions = {
  symbol: HuobiPair;
  period?:
    | "1min"
    | "5min"
    | "15min"
    | "30min"
    | "60min"
    | "4hour"
    | "1day"
    | "1week"
    // deno-lint-ignore ban-types
    | (string & {});
  size?: number;
};

type KlineResponse = SuccessResponse<{
  ts: Date;
  ch: string;
  data: {
    id: number;
    open: number;
    close: number;
    low: number;
    high: number;
    amount: number;
    vol: number;
    count: number;
  }[];
}>;

const reviver = defineReviver();

export function fetchKline(
  { symbol, period, size }: KlineOptions,
  init?: RequestInit,
): Promise<KlineResponse> {
  const url = new URL(MARKET_HISTORY_KLINE, BASE_URL);

  url.searchParams.set("symbol", symbol);

  if (isString(period)) {
    url.searchParams.set("period", period);
  }

  if (isNumber(size)) {
    url.searchParams.set("size", String(size));
  }

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}

export type { KlineOptions, KlineResponse };
