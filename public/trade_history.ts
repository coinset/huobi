import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import { isNumber } from "../deps.ts";
import type { HuobiPair } from "./types.ts";

const MARKET_HISTORY_TRADE = "market/history/trade";

export type TradeHistoryOptions = {
  symbol: HuobiPair;
  size?: number;
};

export type TradeHistoryResponse = SuccessResponse<{
  ts: Date;
  ch: string;
  data: {
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
  }[];
}>;

const reviver = defineReviver();

export function fetchTradeHistory(
  { symbol, size }: TradeHistoryOptions,
  init?: RequestInit,
): Promise<TradeHistoryResponse> {
  const url = new URL(MARKET_HISTORY_TRADE, BASE_URL);

  url.searchParams.set("symbol", symbol);

  if (isNumber(size)) {
    url.searchParams.set("size", String(size));
  }

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
