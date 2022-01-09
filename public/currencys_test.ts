import { expect, test } from "../dev_deps.ts";
import { fetchCurrencys } from "./currencys.ts";
import { ALL_HUOBI_SYMBOLS } from "./constants.ts";

test("fetchCurrencys", async () => {
  await expect(fetchCurrencys()).resolves.toEqual({
    status: "ok",
    data: ALL_HUOBI_SYMBOLS,
  });
});
