import { Wrap } from './styles'
import Spinner from '@/application/components/spinner'

import React from 'react'

type Props = {
  state: any
}

const FormStatus: React.FC<Props> = ({ state }: Props) => {
  const { isLoading, mainError } = state
  return (
    <Wrap data-testid="error-wrap">
      {isLoading && <Spinner className='spinner' />}
      {mainError && <span data-testid="main-error" className='error'>{mainError}</span>}
    </Wrap>
  )
}

export default FormStatus
