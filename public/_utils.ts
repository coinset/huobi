export type Reviver = Parameters<typeof JSON.parse>[1];

export const jsonFetch = async <T>(
  url: RequestInfo,
  init?: RequestInit,
  options?: { parseJson: Reviver },
): Promise<T> => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw Error(res.statusText);
  }

  const text = await res.text();
  const parsed = JSON.parse(text, options?.parseJson);

  if ("status" in parsed && parsed.status !== "ok") {
    throw Error(parsed["err-msg"]);
  }

  return parsed;
};

export type SuccessResponse<Data extends Record<PropertyKey, unknown>> = ({
  status: "ok";
} & Data);

export type ErrorResponse = {
  status: "error";
  ts: Date;
  "err-code": string;
  "err-msg": string;
};

export const defineReviver = (reviver?: Reviver) =>
  (key: string, value: unknown) => {
    if (key === "ts" && typeof value === "number") {
      return new Date(value);
    }
    return reviver ? reviver(key, value) : value;
  };
