import axios from 'axios'
import { AxiosHttpClient } from '@/infra/http'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  let sut: AxiosHttpClient
  let fakeAxios: jest.Mocked<typeof axios>
  let url: string
  let data: object
  let config: object

  beforeAll(() => {
    fakeAxios = axios as jest.Mocked<typeof axios>
    url = 'any_url'
    data = { any_data: 'any_data' }
    config = { any_config: 'any_config' }
    fakeAxios.get.mockResolvedValue({
      status: 200,
      data: 'any_data_return'
    })
    fakeAxios.post.mockResolvedValue({
      status: 200,
      data: 'any_data_return'
    })
    fakeAxios.put.mockResolvedValue({
      status: 200,
      data: 'any_data_return'
    })
    fakeAxios.delete.mockResolvedValue({
      status: 200,
      data: 'any_data_return'
    })
  })

  beforeEach(() => {
    sut = new AxiosHttpClient()
  })

  describe('get', () => {
    it('Should call get function with corrrect params', async () => {
      await sut.get({ url: url, config })

      expect(fakeAxios.get).toHaveBeenCalledWith(url, config)
      expect(fakeAxios.get).toBeCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.get({ url: url, config })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if config is empty', async () => {
      const result = await sut.get({ url: url })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should returns error if response throw', async () => {
      fakeAxios.get.mockRejectedValueOnce({
        response: {
          status: 400,
          data: { error: 'any_400_error' }
        }
      })

      const response = await sut.get({ url: url, config })

      expect(response).toEqual({
        statusCode: 400,
        body: { error: 'any_400_error' }
      })
    })
  })

  describe('post', () => {
    it('Should call post function with corrrect params', async () => {
      await sut.post({ url: url, data, config })

      expect(fakeAxios.post).toHaveBeenCalledWith(url, data, config)
      expect(fakeAxios.post).toBeCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.post({ url: url, data, config })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if data is empty', async () => {
      const result = await sut.post({ url: url, config })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if config is empty', async () => {
      const result = await sut.post({ url: url, data })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if data and config is empty', async () => {
      const result = await sut.post({ url: url })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should returns error if response throw', async () => {
      fakeAxios.post.mockRejectedValueOnce({
        response: {
          status: 400,
          data: { error: 'any_400_error' }
        }
      })

      const response = await sut.post({ url: url, config })

      expect(response).toEqual({
        statusCode: 400,
        body: { error: 'any_400_error' }
      })
    })
  })

  describe('put', () => {
    it('Should call put function with corrrect params', async () => {
      await sut.put({ url: url, data, config })

      expect(fakeAxios.put).toHaveBeenCalledWith(url, data, config)
      expect(fakeAxios.put).toBeCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.put({ url: url, data, config })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if data is empty', async () => {
      const result = await sut.put({ url: url, config })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if config is empty', async () => {
      const result = await sut.put({ url: url, data })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if data and config is empty', async () => {
      const result = await sut.put({ url: url })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should returns error if response throw', async () => {
      fakeAxios.put.mockRejectedValueOnce({
        response: {
          status: 400,
          data: { error: 'any_400_error' }
        }
      })

      const response = await sut.put({ url: url, config })

      expect(response).toEqual({
        statusCode: 400,
        body: { error: 'any_400_error' }
      })
    })
  })

  describe('delete', () => {
    it('Should call delete function with corrrect params', async () => {
      await sut.delete({ url: url, config })

      expect(fakeAxios.delete).toHaveBeenCalledWith(url, config)
      expect(fakeAxios.delete).toBeCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.delete({ url: url, config })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should return data on success if config is empty', async () => {
      const result = await sut.delete({ url: url })

      expect(result).toEqual({
        statusCode: 200,
        body: 'any_data_return'
      })
    })

    it('should returns error if response throw', async () => {
      fakeAxios.delete.mockRejectedValueOnce({
        response: {
          status: 400,
          data: { error: 'any_400_error' }
        }
      })

      const response = await sut.delete({ url: url, config })

      expect(response).toEqual({
        statusCode: 400,
        body: { error: 'any_400_error' }
      })
    })
  })
})
