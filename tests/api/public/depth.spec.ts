import { fetchDepth } from '@/api/public/depth'

describe('fetchDepth', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchDepth({
      symbol: 'btcjpy',
      type: 'step0'
    })

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.ch).toEqual(expect.any(String))
    expect(result.tick).toEqual(expect.any(Object))
    expect(result.ts).toEqual(expect.any(Date))

    const { asks, version, bids } = result.tick

    expect(version).toEqual(expect.any(Number))
    expect(asks).toEqual(expect.any(Array))
    expect(asks[0]).toEqual(expect.any(Array))
    expect(asks[0]).toHaveLength(2)
    expect(asks[0][0]).toEqual(expect.any(Number))
    expect(asks[0][1]).toEqual(expect.any(Number))
    expect(bids).toEqual(expect.any(Array))
    expect(bids[0]).toEqual(expect.any(Array))
    expect(bids[0]).toHaveLength(2)
    expect(bids[0][0]).toEqual(expect.any(Number))
    expect(bids[0][1]).toEqual(expect.any(Number))
  })
})
