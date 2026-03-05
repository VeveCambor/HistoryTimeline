import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

console.log('🚀 Aplikace se spouští...')

try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element nenalezen!')
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  )
  
  console.log('✅ Aplikace úspěšně načtena!')
} catch (error) {
  console.error('❌ Chyba při spouštění aplikace:', error)
}

