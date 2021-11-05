import { BASE_URL, V1_COMMON_CURRENCYS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { SimplePublicAPI, Response } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type CurrencysOptions = {}

type CurrencysResponse = Response<{
  data: string[]
}>

const fetchCurrencys: SimplePublicAPI<CurrencysOptions, CurrencysResponse> = (
  _,
  init
) => {
  const url = new URL(V1_COMMON_CURRENCYS, BASE_URL)
  return jsonFetch(url, init)
}

export { fetchCurrencys }

export type { CurrencysOptions, CurrencysResponse }
