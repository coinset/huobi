import {
  any,
  anyArray,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchTradeHistory } from "./trade_history.ts";
import { ALL_HUOBI_PAIRS } from "./constants.ts";
import type { HuobiPair } from "./types.ts";

test("fetchTradeHistory", async () => {
  const testCase = async (symbol: HuobiPair) => {
    await expect(fetchTradeHistory({ symbol })).resolves.toEqual({
      status: "ok",
      ts: any(Date),
      ch: anyString(),
      data: anyArray({
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
      }),
    });
  };

  await Promise.all(ALL_HUOBI_PAIRS.map(testCase));
});
