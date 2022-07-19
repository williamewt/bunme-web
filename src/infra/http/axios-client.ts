import axios from 'axios'

import { HttpDeleteClient, HttpGetClient, HttpPostClient, HttpPutClient } from '@/infra/http'

export class AxiosHttpClient implements HttpGetClient, HttpPostClient, HttpPutClient, HttpDeleteClient {
  async get (input: HttpGetClient.Input): Promise<any> {
    const result = await axios.get(input.url, input.config ?? {})
    return result.data
  }

  async post ({ url, data, config }: HttpPostClient.Input): Promise<any> {
    const result = await axios.post(url, data ?? {}, config ?? {})
    return result.data
  }

  async put ({ url, data, config }: HttpPutClient.Input): Promise<any> {
    const result = await axios.put(url, data ?? {}, config ?? {})
    return result.data
  }

  async delete (input: HttpDeleteClient.Input): Promise<any> {
    const result = await axios.delete(input.url, input.config ?? {})
    return result.data
  }
}
