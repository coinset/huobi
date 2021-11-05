import { BASE_URL, MARKET_HISTORY_TRADE } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { HuobiPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

type TradeHistoryOptions = {
  symbol: HuobiPair
  size?: number
}

type TradeHistoryResponse = Response<{
  ts: Date
  ch: string
  data: {
    id: number
    ts: Date
    data: {
      id: number
      ts: Date
      'trade-id': number
      amount: number
      price: number
      direction: 'buy' | 'sell'
    }[]
  }[]
}>

const reviver = defineReviver()

const fetchTradeHistory: PublicAPI<TradeHistoryOptions, TradeHistoryResponse> =
  ({ symbol, size }, init) => {
    const url = new URL(MARKET_HISTORY_TRADE, BASE_URL)

    url.searchParams.set('symbol', symbol)

    if (typeof size === 'number') {
      url.searchParams.set('size', String(size))
    }

    return jsonFetch(url, init, {
      parseJson: reviver
    })
  }

export { fetchTradeHistory }

export type { TradeHistoryOptions, TradeHistoryResponse }
