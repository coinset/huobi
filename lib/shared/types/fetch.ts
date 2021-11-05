import type { RequestInit } from 'node-fetch'

type PublicAPI<O, R> = (options: O, init?: RequestInit) => Promise<R>
type SimplePublicAPI<O, R> = (options?: O, init?: RequestInit) => Promise<R>

type Response<Data> =
  | { success: true; data: Data }
  | {
      success: false
      data: {
        code: number
      }
    }

type Reviver = Parameters<typeof JSON.parse>[1]

export type { PublicAPI, SimplePublicAPI, Response, Reviver }
