import { fetchTrade } from '@/api/public/trade'

describe('fetchTrade', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTrade({
      symbol: 'btcjpy'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toEqual(expect.any(String))
    expect(result.tick).toEqual(expect.any(Object))
    expect(result.ts).toEqual(expect.any(Date))

    const { id, ts, data } = result.tick

    expect(id).toEqual(expect.any(Number))
    expect(ts).toEqual(expect.any(Date))
    expect(data).toEqual(expect.any(Array))

    const { amount, price, direction } = data[0]
    expect(data[0].id).toEqual(expect.any(Number))
    expect(data[0].ts).toEqual(expect.any(Date))
    expect(data[0]['trade-id']).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(price).toEqual(expect.any(Number))
    expect(direction).toMatch(/buy|sell/)
  })
})
