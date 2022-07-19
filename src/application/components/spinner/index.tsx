import { Spinner } from './styles'

import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
}

const SpinnerComponent: React.FC<Props> = ({ isNegative, ...props }: Props) => {
  const negativeClass = isNegative ? 'negative' : ''
  return (
    <Spinner {...props} data-testid="spinner" className={negativeClass}>
      <div /><div /><div /><div />
    </Spinner>
  )
}

export default SpinnerComponent
