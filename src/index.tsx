import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './app/config/i18n'

import { App } from './app/App'
import { AppWrapper } from './app/AppWrapper'

import './globals.css'
import '@mantine/notifications/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>,
)
