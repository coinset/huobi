import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import type { HuobiPair } from "./types.ts";

const MARKET_DEPTH = "market/depth";

export type DepthOptions = {
  symbol: HuobiPair;
  type: "step0" | "step1" | "step2" | "step3" | "step4" | "step5";
};

export type DepthResponse = SuccessResponse<{
  ts: Date;
  ch: string;
  tick: {
    bids: [number, number][];
    asks: [number, number][];
    version: number;
  };
}>;

const reviver = defineReviver((_, value) => {
  return value;
});

function fetchDepth(
  { symbol, type }: DepthOptions,
  init?: RequestInit,
): Promise<DepthResponse> {
  const url = new URL(MARKET_DEPTH, BASE_URL);

  url.searchParams.set("symbol", symbol);
  url.searchParams.set("type", type);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}

export { fetchDepth };
