import styled from 'styled-components'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

function Button({ children, onClick, variant = 'primary', fullWidth = false, type = 'button' }: ButtonProps) {
  return (
    <StyledButton 
      $variant={variant} 
      $fullWidth={fullWidth}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  )
}

export default Button

// Styled Components
const StyledButton = styled.button<{ $variant: string; $fullWidth: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};

  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover {
            opacity: 0.9;
          }
        `
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.2);
          color: white;
          &:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `
      case 'ghost':
        return `
          background: transparent;
          color: #667eea;
          &:hover {
            background: rgba(102, 126, 234, 0.1);
          }
        `
      default:
        return ''
    }
  }}
`

