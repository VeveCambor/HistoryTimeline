import styled from 'styled-components'

interface YearBadgeProps {
  year: number
  variant?: 'header' | 'card' | 'tooltip'
}

function YearBadge({ year, variant = 'header' }: YearBadgeProps) {
  return <YearBadgeContainer $variant={variant}>{year}</YearBadgeContainer>
}

export default YearBadge

// Styled Components
const YearBadgeContainer = styled.span<{ $variant: string }>`
  font-weight: 600;
  color: #FF8C00;
  
  ${props => {
    switch (props.$variant) {
      case 'header':
        return `
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        `
      case 'card':
        return `
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        `
      case 'tooltip':
        return `
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        `
      default:
        return ''
    }
  }}
`

