import { makeApiUrl } from '@/main/factories/http'
import { Authentication, setupAuthentication } from '@/domain/use-cases'
import { AxiosHttpClient } from '@/infra/http'

export const makeAuthentication = (): Authentication => setupAuthentication(makeApiUrl('/login'), new AxiosHttpClient())
