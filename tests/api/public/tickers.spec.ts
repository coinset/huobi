// eslint-disable-next-line import/no-unresolved
import { expectTick } from '@test/api/public/ticker.spec'

import { fetchTickers } from '@/api/public/tickers'

describe('fetchTickers', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTickers()

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.data).toBeArray()
    expect(result.ts).toBeAfter(new Date('2000/1/1'))

    result.data.forEach((tick) => {
      expectTick(tick)
      const {
        bid,
        ask,
        bidSize,
        askSize,
        amount,
        count,
        open,
        close,
        low,
        high,
        vol
      } = tick

      expect(bid).toBeNumber()
      expect(bidSize).toBeNumber()
      expect(ask).toBeNumber()
      expect(askSize).toBeNumber()
      expect(amount).toBeNumber()
      expect(count).toBeNumber()
      expect(open).toBeNumber()
      expect(close).toBeNumber()
      expect(low).toBeNumber()
      expect(high).toBeNumber()
      expect(vol).toBeNumber()
    })
  })
})
