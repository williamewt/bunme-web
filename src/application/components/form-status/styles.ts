import styled from 'styled-components'

import { Colors } from '@/application/styles'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    margin-top: 30px;
  }

  .error {
    margin-top: 30px;
    color: ${Colors.primaryLight};
  }
`
