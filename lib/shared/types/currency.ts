import type { StrictExtract, StrictExclude } from '@/utils/types'
import type {
  Pair,
  jpy,
  btc,
  xrp,
  eth,
  ltc,
  bch,
  mona,
  ht,
  xem,
  xlm,
  lsk,
  etc,
  bat,
  ont,
  qtum,
  trx,
  bcha
} from 'cryptocurrency-types'

type HuobiSymbol =
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

type HuobiPair =
  | Pair<StrictExclude<HuobiSymbol, bcha | jpy>, btc, ''>
  | Pair<StrictExclude<HuobiSymbol, bcha | etc | lsk | jpy>, jpy, ''>
  | Pair<StrictExtract<HuobiSymbol, bch | etc | xrp | ltc>, ht, ''>
  | Pair<
      StrictExtract<HuobiSymbol, trx | bat | ht | qtum | lsk | xlm | ont>,
      eth,
      ''
    >

export type { HuobiPair, HuobiSymbol }
