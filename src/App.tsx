import { ThemeProvider } from 'styled-components'

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import AppProvider from './hooks'
import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Header />

        <Dashboard />

        <GlobalStyles />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
