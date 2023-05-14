import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './assets/styles/global'
import { defaultTheme } from './assets/styles/themes/default'

import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { DeliveryDataContextProvider } from './contexts/DeliveryDataContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename="/rocketseat-ignite-challenge-coffee-delivery/">
        <CartContextProvider>
          <DeliveryDataContextProvider>
            <Router />
          </DeliveryDataContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
