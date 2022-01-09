import { BASE_URL } from "./constants.ts";
import { jsonFetch, SuccessResponse } from "./_utils.ts";
import type { HuobiPair } from "./types.ts";

const V1_COMMON_SYMBOLS = "v1/common/symbols";

export type SymbolsResponse = SuccessResponse<{
  data: {
    "base-currency": string;
    "quote-currency": string;
    "price-precision": number;
    "amount-precision": number;
    "symbol-partition": string;
    symbol: HuobiPair;
    state: "online" | "offline" | "suspend";
    "value-precision": number;

    /**
     * @deprecated To be abolished
     */
    "min-order-amt": number;

    /**
     * @deprecated To be abolished
     */
    "max-order-amt": number;
    "min-order-value": number;
    "limit-order-min-order-amt": number;
    "limit-order-max-order-amt": number;
    "limit-order-max-buy-amt": number;
    "limit-order-max-sell-amt": number;
    "sell-market-min-order-amt": number;
    "sell-market-max-order-amt": number;
    "buy-market-max-order-value": number;
    "api-trading": "enabled";
  }[];
}>;

export function fetchSymbols(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<SymbolsResponse> {
  const url = new URL(V1_COMMON_SYMBOLS, BASE_URL);
  return jsonFetch(url.toString(), init);
}
