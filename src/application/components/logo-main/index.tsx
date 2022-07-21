import React from 'react'
import ImgLogoMain from '@/assets/logo-main.svg'

type Props = {
  width: number
}

const LogoMain: React.FC<Props> = ({ width }: Props) => {
  return (
    <img src={ImgLogoMain} width={width} />
  )
}

export default LogoMain
