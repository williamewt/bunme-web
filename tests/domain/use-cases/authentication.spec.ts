import { mock, MockProxy } from 'jest-mock-extended'
import { HttpPostClient } from '@/infra/http'
import { UnexpectedError } from '@/domain/errors'
import { Authentication, setupAuthentication } from '@/domain/use-cases'

describe('Authentication', () => {
  let httpClient: MockProxy<HttpPostClient>
  let url: string
  let sut: Authentication
  let data: { email: string, password: string }

  beforeAll(() => {
    url = 'any_url'
    httpClient = mock()
    data = { email: 'any_email', password: 'any_password' }
    httpClient.post.mockResolvedValue({
      statusCode: 200,
      body: { accessToken: 'any_token' }
    })
  })

  beforeEach(() => {
    sut = setupAuthentication(url, httpClient)
  })

  it('Should calls httpClient.post with correct params', async () => {
    await sut(data)

    expect(httpClient.post).toHaveBeenCalledWith({ url, data })
    expect(httpClient.post).toHaveBeenCalledTimes(1)
  })

  it('Should returns throw Error if returns statusCode 400', async () => {
    httpClient.post.mockResolvedValueOnce({
      statusCode: 400,
      body: { error: 'any_400_error' }
    })

    const promise = sut(data)

    await expect(promise).rejects.toThrow(new Error('any_400_error'))
  })

  it('Should returns throw Error if returns statusCode 500', async () => {
    httpClient.post.mockResolvedValueOnce({
      statusCode: 500,
      body: { error: 'any_500_error' }
    })

    const promise = sut(data)

    await expect(promise).rejects.toThrow(new Error('any_500_error'))
  })

  it('Should returns throw UnexpectedError if returns statusCode 404', async () => {
    httpClient.post.mockResolvedValueOnce({
      statusCode: 404,
      body: { error: 'any_404_error' }
    })

    const promise = sut(data)

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('Should returns 200 if returns statusCode 200', async () => {
    const { accessToken } = await sut(data)

    expect(accessToken).toEqual('any_token')
  })
})
