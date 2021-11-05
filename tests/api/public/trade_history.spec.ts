import { fetchTradeHistory } from '@/api/public/trade_history'

describe('fetchTradeHistory', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTradeHistory({
      symbol: 'btcjpy'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toEqual(expect.any(String))
    expect(result.ts).toEqual(expect.any(Date))
    expect(result.data).toEqual(expect.any(Array))

    const { id, ts, data } = result.data[0]
    expect(id).toEqual(expect.any(Number))
    expect(ts).toEqual(expect.any(Date))
    expect(data).toEqual(expect.any(Array))

    const { amount, direction, price } = data[0]
    expect(amount).toEqual(expect.any(Number))
    expect(direction).toMatch(/buy|sell/)
    expect(price).toEqual(expect.any(Number))
    expect(data[0].id).toEqual(expect.any(Number))
    expect(data[0].ts).toEqual(expect.any(Date))
    expect(data[0]['trade-id']).toEqual(expect.any(Number))
  })
})
