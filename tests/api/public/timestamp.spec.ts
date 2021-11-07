import { fetchTimestamp } from '@/api/public/timestamp'

describe('fetchTimestamp', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTimestamp()

    expect(result.status).toMatch(/ok|error/)

    if (result.status === 'error') return

    expect(result.data).toBeAfter(new Date('2000/1/1'))
  })
})
