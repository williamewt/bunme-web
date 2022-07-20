import axios, { AxiosResponse } from 'axios'

import { HttpDeleteClient, HttpGetClient, HttpPostClient, HttpPutClient, HttpResponse } from '@/infra/http'
import { UnexpectedError } from '@/application/errors'

export class AxiosHttpClient implements HttpGetClient, HttpPostClient, HttpPutClient, HttpDeleteClient {
  async get (input: HttpGetClient.Input): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(input.url, input.config ?? {})
    } catch (error: any) {
      if (!Object.prototype.hasOwnProperty.call(error, 'response')) {
        throw new UnexpectedError()
      }
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }

  async post ({ url, data, config }: HttpPostClient.Input): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.post(url, data ?? {}, config ?? {})
    } catch (error: any) {
      if (!Object.prototype.hasOwnProperty.call(error, 'response')) {
        throw new UnexpectedError()
      }
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }

  async put ({ url, data, config }: HttpPutClient.Input): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.put(url, data ?? {}, config ?? {})
    } catch (error: any) {
      if (!Object.prototype.hasOwnProperty.call(error, 'response')) {
        throw new UnexpectedError()
      }
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }

  async delete (input: HttpDeleteClient.Input): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.delete(input.url, input.config ?? {})
    } catch (error: any) {
      if (!Object.prototype.hasOwnProperty.call(error, 'response')) {
        throw new UnexpectedError()
      }
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
