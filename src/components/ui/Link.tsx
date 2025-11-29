import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

interface LinkProps {
  to: string
  children: React.ReactNode
}

function Link({ to, children }: LinkProps) {
  return <StyledLink to={to}>{children}</StyledLink>
}

export default Link

// Styled Components
const StyledLink = styled(RouterLink)`
  display: inline-block;
  color: #FF8C00;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #8B4513;
  }
`

