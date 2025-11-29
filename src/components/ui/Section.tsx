import styled from 'styled-components'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  color?: string
}

function Section({ children, title, color }: SectionProps) {
  return (
    <SectionContainer>
      {title && <SectionTitle $color={color}>{title}</SectionTitle>}
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

const SectionTitle = styled.h2<{ $color?: string }>`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.$color || '#333'};
  border-bottom: 2px solid ${props => props.$color ? `${props.$color}40` : '#e0e0e0'};
  padding-bottom: 0.5rem;
`

