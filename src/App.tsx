import { ThemeProvider } from 'styled-components'

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Dashboard />

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
