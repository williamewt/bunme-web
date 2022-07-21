import styled from 'styled-components'
import bgLogin from '@/assets/bg-login.png'
import { Colors } from '@/application/styles'

export const Wrap = styled.div`
  padding-top: 60px;
  background-color: rgba(255,255,255,0.8);
`

export const Card = styled.div`
  max-width: 1000px;
  height: 620px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  box-shadow: 0px 2px 37px -14px rgb(0 0 0 / 20%);
`

export const Left = styled.div`
  width: 80%;
  height: 620px;
  background-image: url(${bgLogin});
  background-size:100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30px;
`

export const TextWelcome = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.white};
`
export const TextPhrase = styled.h1`
  margin-top: 60px;
  font-weight: 200;
  font-size: 32px;
  font-style: italic;
  color: ${Colors.white};
`

export const Right = styled.div`
  width: 100%;
  height: 620px;
  padding-top: 60px;
`
