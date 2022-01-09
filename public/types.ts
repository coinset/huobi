import type {
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
  StrictExclude,
  StrictExtract,
  trx,
  xem,
  xlm,
  xrp,
  xym,
} from "../deps.ts";

export type HuobiSymbol =
  | btc
  | xrp
  | eth
  | ltc
  | bch
  | mona
  | ht
  | xem
  | xlm
  | lsk
  | etc
  | bat
  | ont
  | qtum
  | trx
  | jpy
  | bcha
  | xym;

export type HuobiPair =
  | Pair<StrictExclude<HuobiSymbol, bcha | jpy | lsk | xym | mona>, btc, "">
  | Pair<StrictExclude<HuobiSymbol, bcha | etc | lsk | jpy>, jpy, "">
  | Pair<StrictExtract<HuobiSymbol, bch | etc | xrp | ltc>, ht, "">
  | Pair<
    StrictExtract<HuobiSymbol, trx | bat | ht | qtum | xlm | ont>,
    eth,
    ""
  >;
