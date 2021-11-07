import { fetchTrade } from '@/api/public/trade'

describe('fetchTrade', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTrade({
      symbol: 'btcjpy'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toBeString()
    expect(result.tick).toBeObject()
    expect(result.ts).toBeAfter(new Date('2000/1/1'))

    const { id, ts, data } = result.tick

    expect(id).toBeNumber()
    expect(ts).toBeAfter(new Date('2000/1/1'))
    expect(data).toBeArray()

    data.forEach((v) => {
      const { amount, direction, price, id, ts } = v
      expect(amount).toBeNumber()
      expect(direction).toBeOneOf(['buy', 'sell'])
      expect(price).toBeNumber()
      expect(id).toBeNumber()
      expect(ts).toBeAfter(new Date('2000/1/1'))
      expect(v['trade-id']).toBeNumber()
    })
  })
})
