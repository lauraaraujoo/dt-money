import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
)