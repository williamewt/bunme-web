import * as React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/main/routes/router'
import GlobalStyle from '@/main/globals'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router/>
  </React.StrictMode>
)
