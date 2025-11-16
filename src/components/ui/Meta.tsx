import styled from 'styled-components'
import { ReactNode } from 'react'

interface MetaProps {
  children: ReactNode
}

function Meta({ children }: MetaProps) {
  return <MetaContainer>{children}</MetaContainer>
}

export default Meta

// Styled Components
const MetaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`

