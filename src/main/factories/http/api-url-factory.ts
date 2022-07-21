import { env } from '@/main/config/env'

export const makeApiUrl = (path: string): string => `${env.api.url}${path}`
