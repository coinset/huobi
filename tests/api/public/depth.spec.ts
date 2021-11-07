import { fetchDepth } from '@/api/public/depth'

describe('fetchDepth', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchDepth({
      symbol: 'btcjpy',
      type: 'step0'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toBeString()
    expect(result.tick).toBeObject()
    expect(result.ts).toBeAfter(new Date('2000/1/1'))

    const { asks, version, bids } = result.tick

    const expectPriceAmount = (value: [number, number][]) => {
      expect(value).toBeArray()

      value.forEach((v) => {
        expect(v).toHaveLength(2)
        const [price, amount] = v
        expect(price).toBeNumber()
        expect(amount).toBeNumber()
      })
    }

    expect(version).toBeNumber()
    expectPriceAmount(asks)
    expectPriceAmount(bids)
  })
})
