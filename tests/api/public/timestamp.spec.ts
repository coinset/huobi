import { fetchTimestamp } from '@/api/public/timestamp'

describe('fetchTimestamp', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTimestamp()

    expect(result.status).toMatch(/ok|error/)

    expect(result.data).toEqual(expect.any(Date))
  })
})
