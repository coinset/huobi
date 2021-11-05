import type { RequestInit } from 'node-fetch'

type PublicAPI<O, R> = (options: O, init?: RequestInit) => Promise<R>
type SimplePublicAPI<O, R> = (options?: O, init?: RequestInit) => Promise<R>

// eslint-disable-next-line @typescript-eslint/ban-types
type Response<Data extends Record<PropertyKey, unknown> = {}> =
  | ({ status: 'ok' } & Data)
  | {
      status: 'error'
      ts: Date
      'err-code': string
      'err-msg': string
    }

type Reviver = Parameters<typeof JSON.parse>[1]

export type { PublicAPI, SimplePublicAPI, Response, Reviver }
