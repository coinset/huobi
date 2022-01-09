import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import type { HuobiPair } from "./types.ts";

const MARKET_DETAIL_MARGED = "market/detail/merged";
export type TickerOptions = {
  symbol: HuobiPair;
};

export type TickerResponse = SuccessResponse<{
  ts: Date;
  ch: string;
  tick: Tick & {
    id: number;
    bid: [number, number];
    ask: [number, number];
  };
}>;

type Tick = {
  amount: number;
  count: number;
  open: number;
  close: number;
  low: number;
  high: number;
  vol: number;
};

const reviver = defineReviver();

export function fetchTicker(
  { symbol }: TickerOptions,
  init?: RequestInit,
): Promise<TickerResponse> {
  const url = new URL(MARKET_DETAIL_MARGED, BASE_URL);

  url.searchParams.set("symbol", symbol);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}

export type { Tick };
