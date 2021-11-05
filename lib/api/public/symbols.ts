import { BASE_URL, V1_COMMON_SYMBOLS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { HuobiPair } from '@/shared/types/currency'
import type { SimplePublicAPI, Response } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type SymbolsOptions = {}

type SymbolsResponse = Response<{
  data: {
    'base-currency': string
    'quote-currency': string
    'price-precision': number
    'amount-precision': number
    'symbol-partition': string
    symbol: HuobiPair
    state: 'online' | 'offline' | 'suspend'
    'value-precision': number

    /**
     * @deprecated To be abolished
     */
    'min-order-amt': number

    /**
     * @deprecated To be abolished
     */
    'max-order-amt': number
    'min-order-value': number
    'limit-order-min-order-amt': number
    'limit-order-max-order-amt': number
    'limit-order-max-buy-amt': number
    'limit-order-max-sell-amt': number
    'sell-market-min-order-amt': number
    'sell-market-max-order-amt': number
    'buy-market-max-order-value': number
    'api-trading': 'enabled'
  }[]
}>

const fetchSymbols: SimplePublicAPI<SymbolsOptions, SymbolsResponse> = (
  _,
  init
) => {
  const url = new URL(V1_COMMON_SYMBOLS, BASE_URL)
  return jsonFetch(url, init)
}

export { fetchSymbols }

export type { SymbolsOptions, SymbolsResponse }
