import { fetchTicker } from "./ticker.ts";
import { any, anyNumber, anyString, expect, test } from "../dev_deps.ts";
import { ALL_HUOBI_PAIRS } from "./constants.ts";
import type { HuobiPair } from "./types.ts";

test("fetchTicker", async () => {
  const testCase = async (symbol: HuobiPair) => {
    await expect(fetchTicker({ symbol })).resolves.toEqual({
      ch: anyString(),
      status: "ok",
      ts: any(Date),
      tick: {
        id: anyNumber(),
        version: anyNumber(),
        open: anyNumber(),
        close: anyNumber(),
        low: anyNumber(),
        high: anyNumber(),
        amount: anyNumber(),
        vol: anyNumber(),
        count: anyNumber(),
        bid: [anyNumber(), anyNumber()],
        ask: [anyNumber(), anyNumber()],
      },
    });
  };

  await Promise.all(ALL_HUOBI_PAIRS.map(testCase));
});
