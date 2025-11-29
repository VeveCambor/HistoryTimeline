import styled from 'styled-components'

interface TagProps {
  children: string
  onClick?: () => void
  color?: string
}

function Tag({ children, onClick, color }: TagProps) {
  return (
    <TagContainer onClick={onClick} $clickable={!!onClick} $color={color}>
      {children}
    </TagContainer>
  )
}

export default Tag

// Styled Components
const TagContainer = styled.span<{ $clickable?: boolean; $color?: string }>`
  background: ${props => {
    if (props.$color) {
      const colorRgb = hexToRgb(props.$color)
      if (colorRgb) {
        const darkerR = Math.max(0, colorRgb.r - 20)
        const darkerG = Math.max(0, colorRgb.g - 20)
        const darkerB = Math.max(0, colorRgb.b - 20)
        return `linear-gradient(135deg, ${props.$color} 0%, rgb(${darkerR}, ${darkerG}, ${darkerB}) 100%)`
      }
    }
    return 'linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #8B4513 100%)'
  }};
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
      box-shadow: 0 4px 12px ${props.$color ? `${props.$color}80` : 'rgba(255, 140, 0, 0.4)'};
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
`

// Pomocná funkce pro převod hex barvy na RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

