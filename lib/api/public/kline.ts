import { BASE_URL, MARKET_HISTORY_KLINE } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { HuobiPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

type KlineOptions = {
  symbol: HuobiPair
  period?:
    | '1min'
    | '5min'
    | '15min'
    | '30min'
    | '60min'
    | '4hour'
    | '1day'
    | '1week'
    // eslint-disable-next-line @typescript-eslint/ban-types
    | (string & {})
  size?: number
}

type KlineResponse = Response<{
  ts: Date
  ch: string
  data: {
    id: number
    open: number
    close: number
    low: number
    high: number
    amount: number
    vol: number
    count: number
  }[]
}>

const reviver = defineReviver()

const fetchKline: PublicAPI<KlineOptions, KlineResponse> = (
  { symbol, period, size },
  init
) => {
  const url = new URL(MARKET_HISTORY_KLINE, BASE_URL)

  url.searchParams.set('symbol', symbol)

  if (typeof period === 'string') {
    url.searchParams.set('period', period)
  }

  if (typeof size === 'number') {
    url.searchParams.set('size', String(size))
  }

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchKline }

export type { KlineOptions, KlineResponse }
