type StrictExtract<T, U extends T> = T extends U ? T : never
type StrictExclude<T, U extends T> = T extends U ? never : T

export type { StrictExtract, StrictExclude }
