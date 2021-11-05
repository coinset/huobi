import { BASE_URL, MARKET_DETAIL_MARGED } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { HuobiPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

type TickerOptions = {
  symbol: HuobiPair
}

type TickerResponse = Response<{
  ts: Date
  ch: string
  tick: Tick & {
    id: number

    bid: [number, number]
    ask: [number, number]
  }
}>

type Tick = {
  amount: number
  count: number
  open: number
  close: number
  low: number
  high: number
  vol: number
}

const reviver = defineReviver()

const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = (
  { symbol },
  init
) => {
  const url = new URL(MARKET_DETAIL_MARGED, BASE_URL)

  url.searchParams.set('symbol', symbol)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTicker }

export type { TickerOptions, TickerResponse, Tick }
