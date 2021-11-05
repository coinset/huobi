import { BASE_URL, COMMON_CURRENCYS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { SimplePublicAPI } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type CurrencysOptions = {}

type CurrencysResponse = {
  status: 'ok'
  data: string[]
}

const fetchCurrencys: SimplePublicAPI<CurrencysOptions, CurrencysResponse> = (
  options,
  init
) => {
  const url = new URL(COMMON_CURRENCYS, BASE_URL)
  return jsonFetch(url, init)
}

export { fetchCurrencys }

export type { CurrencysOptions, CurrencysResponse }
