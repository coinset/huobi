import { fetchKline } from '@/api/public/kline'

describe('fetchKline', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchKline({
      symbol: 'btcjpy'
    })

    expect(result.status).toBeOneOf(['ok', 'error'])

    if (result.status === 'error') return

    expect(result.ch).toBeString()
    expect(result.data).toBeArray()
    expect(result.ts).toBeAfter(new Date('2000/1/1'))

    result.data.forEach(
      ({ id, open, close, low, high, amount, vol, count }) => {
        expect(id).toBeNumber()
        expect(open).toBeNumber()
        expect(close).toBeNumber()
        expect(low).toBeNumber()
        expect(high).toBeNumber()
        expect(amount).toBeNumber()
        expect(vol).toBeNumber()
        expect(count).toBeNumber()
      }
    )
  })
})
