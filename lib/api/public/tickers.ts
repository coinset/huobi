import type { Tick } from '@/api/public/ticker'
import { BASE_URL, MARKET_TICKERS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { HuobiPair } from '@/shared/types/currency'
import type { SimplePublicAPI, Response } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type TickersOptions = {}

type TickersResponse = Response<{
  ts: Date
  data: (Tick & {
    symbol: HuobiPair
    bid: number
    bidSize: number
    ask: number
    askSize: number
  })[]
}>

const reviver = defineReviver()

const fetchTickers: SimplePublicAPI<TickersOptions, TickersResponse> = (
  _,
  init
) => {
  const url = new URL(MARKET_TICKERS, BASE_URL)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTickers }

export type { TickersOptions, TickersResponse }
