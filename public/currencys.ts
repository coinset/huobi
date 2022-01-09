import { BASE_URL } from "./constants.ts";
import { jsonFetch, SuccessResponse } from "./_utils.ts";

const V1_COMMON_CURRENCYS = "v1/common/currencys";

export type CurrencysResponse = SuccessResponse<{
  data: string[];
}>;

export function fetchCurrencys(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<CurrencysResponse> {
  const url = new URL(V1_COMMON_CURRENCYS, BASE_URL);
  return jsonFetch(url.toString(), init);
}
