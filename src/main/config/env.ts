import { Env } from '@/main/types'

export const env: Env = {
  api: {
    url: import.meta.env.API_URL ?? ''
  }
}
