import styled from 'styled-components'
import { ReactNode } from 'react'

interface NotFoundProps {
  title: string
  children: ReactNode
}

function NotFound({ title, children }: NotFoundProps) {
  return (
    <NotFoundContainer>
      <NotFoundTitle>{title}</NotFoundTitle>
      {children}
    </NotFoundContainer>
  )
}

export default NotFound

// Styled Components
const NotFoundContainer = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`

