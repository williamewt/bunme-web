import { HttpPostClient, HttpStatusCode } from '@/infra/http'
import { UnexpectedError } from '@/domain/errors'

type Setup = (
  url: string,
  httpClient: HttpPostClient
) => Authentication

type Input = { email: string, password: string }
type Output = { accessToken: string }

export type Authentication = (params: Input) => Promise<Output>

export const setupAuthentication: Setup = (url, httpClient) => async params => {
  const httpResponse = await httpClient.post({
    url: url,
    data: params
  })
  if (httpResponse.statusCode === HttpStatusCode.badRequest || httpResponse.statusCode === HttpStatusCode.serverError) {
    throw new Error(httpResponse.body.error)
  }
  if (httpResponse.statusCode === HttpStatusCode.ok) {
    return httpResponse.body
  }
  throw new UnexpectedError()
}
