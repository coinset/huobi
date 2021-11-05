import { Reviver } from '@/shared/types/fetch'

const defineReviver = (reviver?: Reviver) => (key: string, value: unknown) => {
  if (key === 'ts' && typeof value === 'number') {
    return new Date(value)
  }
  return reviver ? reviver(key, value) : value
}

export { defineReviver }
