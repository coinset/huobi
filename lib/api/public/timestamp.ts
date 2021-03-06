import { BASE_URL, V1_COMMON_TIMESTAMP } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { SimplePublicAPI, Response } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type TimestampOptions = {}

type TimestampResponse = Response<{
  data: Date
}>

const reviver = defineReviver((key, value) => {
  if (key === 'data' && typeof value === 'number') {
    return new Date(value)
  }

  return value
})

const fetchTimestamp: SimplePublicAPI<TimestampOptions, TimestampResponse> = (
  _,
  init
) => {
  const url = new URL(V1_COMMON_TIMESTAMP, BASE_URL)
  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTimestamp }

export type { TimestampOptions, TimestampResponse }
