import { fetchTradeHistory } from '@/api/public/trade_history'

describe('fetchTradeHistory', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTradeHistory({
      symbol: 'btcjpy'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toBeString()
    expect(result.ts).toBeAfter(new Date('2000/1/1'))
    expect(result.data).toBeArray()

    const { id, ts, data } = result.data[0]
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
