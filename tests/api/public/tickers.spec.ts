import { fetchTickers } from '@/api/public/tickers'
import { ALL_HUOBI_PAIRS } from '@/constants/pair'

describe('fetchTickers', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTickers()

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.data).toEqual(expect.any(Array))
    expect(result.ts).toEqual(expect.any(Date))

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
    } = result.data[0]

    result.data.forEach(({ symbol }) => {
      expect(ALL_HUOBI_PAIRS).toContain(symbol)
    })

    expect(bid).toEqual(expect.any(Number))
    expect(bidSize).toEqual(expect.any(Number))
    expect(ask).toEqual(expect.any(Number))
    expect(askSize).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(count).toEqual(expect.any(Number))
    expect(open).toEqual(expect.any(Number))
    expect(close).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(vol).toEqual(expect.any(Number))
  })
})
