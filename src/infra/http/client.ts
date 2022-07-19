export interface HttpGetClient {
  get: <T = any> (params: HttpGetClient.Input) => Promise<T>
}

export namespace HttpGetClient {
  export type Input = {
    url: string
    config?: object
  }
}

export interface HttpPostClient {
  post: <T = any> (params: HttpPostClient.Input) => Promise<T>
}

export namespace HttpPostClient {
  export type Input = {
    url: string
    data?: object
    config?: object
  }
}

export interface HttpPutClient {
  put: <T = any> (params: HttpPutClient.Input) => Promise<T>
}

export namespace HttpPutClient {
  export type Input = {
    url: string
    data?: object
    config?: object
  }
}

export interface HttpDeleteClient {
  delete: <T = any> (params: HttpDeleteClient.Input) => Promise<T>
}

export namespace HttpDeleteClient {
  export type Input = {
    url: string
    config?: object
  }
}
