import { fetchCurrencys } from '@/api/public/currencys'
import { ALL_HUOBI_SYMBOLS } from '@/constants/pair'

describe('fetchCurrencys', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchCurrencys()

    expect(result.status).toBeOneOf(['ok', 'error'])
    if (result.status === 'error') return

    expect(result.data).toBeArray()

    expect(result.data).toIncludeSameMembers(ALL_HUOBI_SYMBOLS)
  })
})
