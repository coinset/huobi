import { BASE_URL } from "./constants.ts";
import { defineReviver, jsonFetch, SuccessResponse } from "./_utils.ts";
import { isNumber } from "../deps.ts";

const V1_COMMON_TIMESTAMP = "v1/common/timestamp";

export type TimestampResponse = SuccessResponse<{
  data: Date;
}>;

const reviver = defineReviver((key, value) => {
  if (key === "data" && isNumber(value)) {
    return new Date(value);
  }

  return value;
});

export function fetchTimestamp(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<TimestampResponse> {
  const url = new URL(V1_COMMON_TIMESTAMP, BASE_URL);
  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
