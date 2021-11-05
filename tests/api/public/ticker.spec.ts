import { fetchTicker } from '@/api/public/ticker'

describe('fetchTicker', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTicker({
      symbol: 'btcjpy'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toEqual(expect.any(String))
    expect(result.tick).toEqual(expect.any(Object))
    expect(result.ts).toEqual(expect.any(Date))

    const { id, bid, ask, amount, count, open, close, low, high, vol } =
      result.tick

    expect(id).toEqual(expect.any(Number))
    expect(bid).toEqual(expect.any(Array))
    expect(bid).toHaveLength(2)
    expect(bid[0]).toEqual(expect.any(Number))
    expect(bid[1]).toEqual(expect.any(Number))
    expect(ask).toEqual(expect.any(Array))
    expect(ask).toHaveLength(2)
    expect(ask[0]).toEqual(expect.any(Number))
    expect(ask[1]).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(count).toEqual(expect.any(Number))
    expect(open).toEqual(expect.any(Number))
    expect(close).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(vol).toEqual(expect.any(Number))
  })
})
