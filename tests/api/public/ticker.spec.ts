import { fetchTicker } from '@/api/public/ticker'
import type { Tick } from '@/api/public/ticker'

const expectTick = ({ amount, count, open, close, low, high, vol }: Tick) => {
  expect(amount).toBeNumber()
  expect(count).toBeNumber()
  expect(open).toBeNumber()
  expect(close).toBeNumber()
  expect(low).toBeNumber()
  expect(high).toBeNumber()
  expect(vol).toBeNumber()
}

describe('fetchTicker', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTicker({
      symbol: 'btcjpy'
    })

    expect(result.status).toBeOneOf(['ok', 'error'])

    if (result.status === 'error') return

    expect(result.ch).toBeString()
    expect(result.tick).toBeObject()
    expect(result.ts).toBeAfter(new Date('2000/1/1'))

    const { id, bid, ask } = result.tick

    expect(id).toBeNumber()

    const expectPriceAmount = (value: [number, number]) => {
      expect(value).toBeArray()
      expect(value).toHaveLength(2)
      expect(value[0]).toBeNumber()
      expect(value[1]).toBeNumber()
    }

    expectPriceAmount(ask)
    expectPriceAmount(bid)

    expectTick(result.tick)
  })
})

export { expectTick }
