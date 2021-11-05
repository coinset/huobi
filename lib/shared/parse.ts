import { Reviver } from '@/shared/types/fetch'

const defineReviver = (reviver?: Reviver) => (key: string, value: unknown) => {
  return reviver ? reviver(key, value) : value
}

export { defineReviver }
