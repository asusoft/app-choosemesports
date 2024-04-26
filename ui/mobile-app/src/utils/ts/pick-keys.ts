export type PickKeys<T, K extends keyof T> = {
  [P in K]: T[P]
}
