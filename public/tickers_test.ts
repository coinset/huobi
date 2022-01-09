import { fetchTickers } from "./tickers.ts";
import { any, anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { ALL_HUOBI_PAIRS } from "./constants.ts";

test("fetchTickers", async () => {
  await expect(fetchTickers()).resolves.toEqual({
    ts: any(Date),
    status: "ok",
    data: anyArray({
      symbol: anyOf(ALL_HUOBI_PAIRS),
      open: anyNumber(),
      close: anyNumber(),
      low: anyNumber(),
      high: anyNumber(),
      amount: anyNumber(),
      vol: anyNumber(),
      count: anyNumber(),
      bid: anyNumber(),
      bidSize: anyNumber(),
      ask: anyNumber(),
      askSize: anyNumber(),
    }),
  });
});
