import { Storage } from '@/infra/cache'

import 'jest-localstorage-mock'

describe('Storage', () => {
  let sut: Storage
  let key: string
  let value: any

  beforeEach(() => {
    localStorage.clear()
    sut = new Storage()
    key = 'any_key'
    value = { any_value: 'any_value' }
  })

  afterAll(() => {
    localStorage.clear()
  })

  it('Should calls localStore.setItem with correct params', () => {
    sut.set({ key, value })

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })

  it('Should calls localStore.removeItem if value is null', () => {
    sut.set({ key })

    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1)
  })

  it('Should calls localStore.getItem with correct params', () => {
    sut.get(key)

    expect(localStorage.getItem).toHaveBeenCalledWith(key)
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })

  it('Should return correct value of localStore.getItem', () => {
    jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))

    const getValue = sut.get(key)
    expect(getValue).toEqual(value)
  })
})
