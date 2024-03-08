import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styled/themes/default'
import { GlobalStyle } from './styled/global'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}