import React from 'react'
import { Authentication } from '@/domain/use-cases'
import { Card, Left, Right, TextWelcome, Wrap, TextPhrase } from './styles'
import LogoMain from '@/application/components/logo-main'

type Props = {
  authentication: Authentication
}

const Login: React.FC<Props> = ({ authentication }: Props) => {
  return (
    <Wrap>
      <Card>
        <Left>
          <div className='container'>
            <TextWelcome>Bem vindo(a) de volta!</TextWelcome>
            <TextPhrase>“O ser humano se alimenta de alimentos e sentimentos.”</TextPhrase>
          </div>
        </Left>
        <Right>
          <div className="container">
            <div className="text-center">
              <LogoMain width={300} />
            </div>
          </div>
        </Right>
      </Card>
    </Wrap>
  )
}

export default Login
