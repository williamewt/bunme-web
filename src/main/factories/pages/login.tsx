import { makeAuthentication } from '@/main/factories/use-cases'
import { Login } from '@/application/pages'

import React from 'react'

export const MakeLogin: React.FC = () => {
  return <Login authentication={makeAuthentication()} />
}
