import { fetchSymbols } from '@/api/public/symbols'
import { ALL_HUOBI_PAIRS } from '@/constants/pair'

describe('fetchSymbols', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchSymbols()

    expect(result.status).toBeOneOf(['ok', 'error'])

    if (result.status === 'error') return

    expect(result.data).toBeArray()

    result.data.forEach((r) => {
      expect(r.symbol).toBeOneOf(ALL_HUOBI_PAIRS)
      expect(r['base-currency']).toBeString()
      expect(r['quote-currency']).toBeString()
      expect(r['price-precision']).toBeNumber()
      expect(r['amount-precision']).toBeNumber()
      expect(r['symbol-partition']).toBeString()
      expect(r['state']).toBeOneOf(['online', 'offline', 'suspend'])
      expect(r['value-precision']).toBeNumber()
      expect(r['min-order-value']).toBeNumber()
      expect(r['limit-order-min-order-amt']).toBeNumber()
      expect(r['limit-order-max-order-amt']).toBeNumber()
      expect(r['limit-order-max-buy-amt']).toBeNumber()
      expect(r['limit-order-max-sell-amt']).toBeNumber()
      expect(r['sell-market-min-order-amt']).toBeNumber()
      expect(r['sell-market-max-order-amt']).toBeNumber()
      expect(r['buy-market-max-order-value']).toBeNumber()
      expect(r['api-trading']).toBeString()
    })
  })
})
