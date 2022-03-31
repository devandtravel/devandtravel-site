import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/store'
import { ThemedApp } from './ThemedApp'

const container = document.getElementById('app')
if (!container) {
  throw new Error('Failed to find the root element')
}
const root = createRoot(container)
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemedApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
