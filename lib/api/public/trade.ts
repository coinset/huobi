import { BASE_URL, MARKET_TRADE } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { HuobiPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

type TradeOptions = {
  symbol: HuobiPair
}

type TradeResponse = Response<{
  ts: Date
  ch: string
  tick: {
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
  }
}>

const reviver = defineReviver((key, value) => {
  return value
})

const fetchTrade: PublicAPI<TradeOptions, TradeResponse> = (
  { symbol },
  init
) => {
  const url = new URL(MARKET_TRADE, BASE_URL)

  url.searchParams.set('symbol', symbol)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTrade }

export type { TradeOptions, TradeResponse }
