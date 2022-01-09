import {
  any,
  anyArray,
  anyNumber,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchDepth } from "./depth.ts";
import { ALL_HUOBI_PAIRS } from "./constants.ts";
import type { HuobiPair } from "./types.ts";

test("fetchDepth", async () => {
  const testCase = async (symbol: HuobiPair) => {
    await expect(fetchDepth({ symbol, "type": "step0" })).resolves
      .toEqual(
        {
          ch: anyString(),
          status: "ok",
          ts: any(Date),
          tick: {
            bids: anyArray([anyNumber(), anyNumber()]),
            asks: anyArray([anyNumber(), anyNumber()]),
            version: anyNumber(),
            ts: any(Date),
          },
        },
      );
  };

  await Promise.all(ALL_HUOBI_PAIRS.map(testCase));
});
