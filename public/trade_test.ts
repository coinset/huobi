import {
  any,
  anyArray,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchTrade } from "./trade.ts";
import { ALL_HUOBI_PAIRS } from "./constants.ts";
import type { HuobiPair } from "./types.ts";

test("fetchTrade", async () => {
  const testCase = async (symbol: HuobiPair) => {
    await expect(fetchTrade({ symbol })).resolves.toEqual({
      ch: anyString(),
      status: "ok",
      ts: any(Date),
      tick: {
        id: anyNumber(),
        ts: any(Date),
        data: anyArray({
          id: anyNumber(),
          ts: any(Date),
          "trade-id": anyNumber(),
          amount: anyNumber(),
          price: anyNumber(),
          direction: anyOf(["buy", "sell"]),
        }),
      },
    });
  };

  await Promise.all(ALL_HUOBI_PAIRS.map(testCase));
});
