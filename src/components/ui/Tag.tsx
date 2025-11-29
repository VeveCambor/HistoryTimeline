import styled from 'styled-components'

interface TagProps {
  children: string
  onClick?: () => void
}

function Tag({ children, onClick }: TagProps) {
  return (
    <TagContainer onClick={onClick} $clickable={!!onClick}>
      {children}
    </TagContainer>
  )
}

export default Tag

// Styled Components
const TagContainer = styled.span<{ $clickable?: boolean }>`
  background: linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #8B4513 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  transition: all 0.2s;

  ${props => props.$clickable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 140, 0, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
`

