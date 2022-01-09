import type { Tick } from "./ticker.ts";
import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import type { HuobiPair } from "./types.ts";

const MARKET_TICKERS = "market/tickers";

export type TickersResponse = SuccessResponse<{
  ts: Date;
  data: (Tick & {
    symbol: HuobiPair;
    bid: number;
    bidSize: number;
    ask: number;
    askSize: number;
  })[];
}>;

const reviver = defineReviver();

export function fetchTickers(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<TickersResponse> {
  const url = new URL(MARKET_TICKERS, BASE_URL);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
