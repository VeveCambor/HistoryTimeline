import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import HomePage from './pages/HomePage'
import EventDetail from './pages/EventDetail'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  )
}

export default App

// Styled Components
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`
