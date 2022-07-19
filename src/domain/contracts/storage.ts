export interface GetStorage {
  get: <T = any> (params: GetStorage.Input) => T
}

export namespace GetStorage {
  export type Input = string
}

export interface SetStorage {
  set: (params: SetStorage.Input) => void
}

export namespace SetStorage {
  export type Input = {
    key: string
    value?: any
  }
}
