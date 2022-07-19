import { GetStorage, SetStorage } from '@/domain/contracts'

export class Storage implements GetStorage, SetStorage {
  set ({ key, value }: SetStorage.Input): void {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  get (key: GetStorage.Input): any {
    const data = localStorage.getItem(key)

    if (data !== null) {
      return JSON.parse(data)
    }

    return undefined
  }
}
