// @flow

export type Async<T> = {
  isFetching?: bool,
  didInvalidate?: bool,
  lastUpdated?: string,
  result?: T,
}
