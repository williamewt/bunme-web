import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background: rgba(255,255,255,0.8);
    font: 400 14px Roboto, sans-serif;
  }

  .container{
    max-width: 1128px;
    margin: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  .text-center{
    text-align: center !important;
  }
`
