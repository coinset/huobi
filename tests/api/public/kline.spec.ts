import { fetchKline } from '@/api/public/kline'

describe('fetchKline', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchKline({
      symbol: 'btcjpy'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toEqual(expect.any(String))
    expect(result.data).toEqual(expect.any(Array))
    expect(result.ts).toEqual(expect.any(Date))

    const { id, open, close, low, high, amount, vol, count } = result.data[0]

    expect(id).toEqual(expect.any(Number))
    expect(open).toEqual(expect.any(Number))
    expect(close).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(vol).toEqual(expect.any(Number))
    expect(count).toEqual(expect.any(Number))
  })
})
