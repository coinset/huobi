import { BASE_URL, MARKET_DEPTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { HuobiPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

type DepthOptions = {
  symbol: HuobiPair
  type: 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5'
}

type DepthResponse = Response<{
  ts: Date
  ch: string
  tick: {
    bids: [number, number][]
    asks: [number, number][]
    version: number
  }
}>

const reviver = defineReviver((key, value) => {
  return value
})

const fetchDepth: PublicAPI<DepthOptions, DepthResponse> = (
  { symbol, type },
  init
) => {
  const url = new URL(MARKET_DEPTH, BASE_URL)

  url.searchParams.set('symbol', symbol)
  url.searchParams.set('type', type)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchDepth }

export type { DepthOptions, DepthResponse }
