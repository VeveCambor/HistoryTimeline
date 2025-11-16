import styled from 'styled-components'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
}

function Section({ children, title }: SectionProps) {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionContainer>
  )
}

export default Section

// Styled Components
const SectionContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`

