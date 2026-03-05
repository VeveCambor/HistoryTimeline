import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { theme } from './styles/theme'
import HomePage from './pages/HomePage'
import EventDetail from './pages/EventDetail'
import PeriodDetail from './pages/PeriodDetail'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/period/:id" element={<PeriodDetail />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App

// Styled Components
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

