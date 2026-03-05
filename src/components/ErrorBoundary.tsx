import React, { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorContent>
            <h1>Něco se pokazilo</h1>
            <p>Omlouváme se, došlo k chybě při načítání aplikace.</p>
            {this.state.error && (
              <ErrorDetails>
                <strong>Chyba:</strong> {this.state.error.message}
                <details>
                  <summary>Stack trace</summary>
                  <pre>{this.state.error.stack}</pre>
                </details>
              </ErrorDetails>
            )}
            <button onClick={() => window.location.reload()}>
              Obnovit stránku
            </button>
          </ErrorContent>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 2rem;
`

const ErrorContent = styled.div`
  max-width: 600px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  h1 {
    color: #e74c3c;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #5568d3;
    }
  }
`

const ErrorDetails = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 6px;
  font-size: 0.9rem;

  details {
    margin-top: 0.5rem;
  }

  pre {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.8rem;
  }
`

export default ErrorBoundary
