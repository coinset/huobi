export { join } from "https://deno.land/std@0.120.0/path/mod.ts";
export type {
  bat,
  bch,
  bcha,
  btc,
  etc,
  eth,
  ht,
  jpy,
  lsk,
  ltc,
  mona,
  ont,
  Pair,
  qtum,
  trx,
  xem,
  xlm,
  xrp,
  xym,
} from "https://deno.land/x/cc_types@v1.0.0-beta.13/mod.ts";
export {
  isNumber,
  isString,
  isUndefined,
} from "https://deno.land/x/isx@v1.0.0-beta.17/mod.ts";

export type StrictExtract<T, U extends T> = T extends U ? T : never;
export type StrictExclude<T, U extends T> = T extends U ? never : T;
