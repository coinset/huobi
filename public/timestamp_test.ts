import { any, expect, test } from "../dev_deps.ts";
import { fetchTimestamp } from "./timestamp.ts";

test("fetchTimestamp", async () => {
  await expect(fetchTimestamp()).resolves.toEqual({
    status: "ok",
    data: any(Date),
  });
});
