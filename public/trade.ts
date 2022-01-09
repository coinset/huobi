import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import type { HuobiPair } from "./types.ts";

const MARKET_TRADE = "market/trade";

type TradeOptions = {
  symbol: HuobiPair;
};

type TradeResponse = SuccessResponse<{
  ts: Date;
  ch: string;
  tick: {
    id: number;
    ts: Date;
    data: {
      id: number;
      ts: Date;
      "trade-id": number;
      amount: number;
      price: number;
      direction: "buy" | "sell";
    }[];
  };
}>;

const reviver = defineReviver((_, value) => {
  return value;
});

export function fetchTrade(
  { symbol }: TradeOptions,
  init?: RequestInit,
): Promise<TradeResponse> {
  const url = new URL(MARKET_TRADE, BASE_URL);

  url.searchParams.set("symbol", symbol);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}

export type { TradeOptions, TradeResponse };
