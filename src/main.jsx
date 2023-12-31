import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'

import store from './store/index.js'

import App from './App.jsx'

import theme from './utils/configs/theme.js'

import './styles/_global.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={import.meta.env.DEV ? '/' : '/social'}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  </Provider>
)
