import { fetchCurrencys } from '@/api/public/currencys'
import { ALL_HUOBI_SYMBOLS } from '@/constants/pair'

describe('fetchCurrencys', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchCurrencys()

    expect(result.status).toMatch(/ok|error/)
    if (result.status === 'error') return

    expect(result.data).toEqual(expect.any(Array))

    expect(result.data).toHaveLength(ALL_HUOBI_SYMBOLS.length)

    ALL_HUOBI_SYMBOLS.forEach((symbol) => {
      expect(result.data).toContain(symbol)
    })
  })
})
