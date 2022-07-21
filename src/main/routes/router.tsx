import { MakeLogin } from '@/main/factories/pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
