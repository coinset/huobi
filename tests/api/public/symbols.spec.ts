import { fetchSymbols } from '@/api/public/symbols'
import { ALL_HUOBI_PAIRS } from '@/constants/pair'

describe('fetchSymbols', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchSymbols()

    expect(result.status).toMatch(/ok|error/)

    expect(result.data).toEqual(expect.any(Array))

    expect(result.data).toHaveLength(ALL_HUOBI_PAIRS.length)

    const pairs = result.data.map(({ symbol }) => symbol)

    ALL_HUOBI_PAIRS.forEach((symbol) => {
      expect(pairs).toContain(symbol)
    })

    result.data.forEach((r) => {
      expect(r['base-currency']).toEqual(expect.any(String))
      expect(r['quote-currency']).toEqual(expect.any(String))
      expect(r['price-precision']).toEqual(expect.any(Number))
      expect(r['amount-precision']).toEqual(expect.any(Number))
      expect(r['symbol-partition']).toEqual(expect.any(String))
      expect(r['state']).toMatch(/online|offline|suspend/)
      expect(r['value-precision']).toEqual(expect.any(Number))
      expect(r['min-order-value']).toEqual(expect.any(Number))
      expect(r['limit-order-min-order-amt']).toEqual(expect.any(Number))
      expect(r['limit-order-max-order-amt']).toEqual(expect.any(Number))
      expect(r['limit-order-max-buy-amt']).toEqual(expect.any(Number))
      expect(r['limit-order-max-sell-amt']).toEqual(expect.any(Number))
      expect(r['sell-market-min-order-amt']).toEqual(expect.any(Number))
      expect(r['sell-market-max-order-amt']).toEqual(expect.any(Number))
      expect(r['buy-market-max-order-value']).toEqual(expect.any(Number))
      expect(r['api-trading']).toEqual(expect.any(String))
    })
  })
})
