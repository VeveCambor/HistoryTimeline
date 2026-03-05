import styled from 'styled-components'
import YearBadge from './YearBadge'
import { hexToRgba } from '../../utils/color'
import { theme } from '../../styles/theme'

interface EventCardProps {
  year: number
  title: string
  location?: string
  selected?: boolean
  hovered?: boolean
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  color?: string
}

function EventCard({ 
  year, 
  title, 
  location, 
  selected = false, 
  hovered = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color
}: EventCardProps) {
  return (
    <CardContainer
      $selected={selected}
      $hovered={hovered}
      $color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <YearBadge year={year} variant="card" color={color} />
      <CardTitle $color={color}>{title}</CardTitle>
      {location && (
        <CardLocation>📍 {location}</CardLocation>
      )}
    </CardContainer>
  )
}

export default EventCard

// Styled Components
const CardContainer = styled.div<{ $selected?: boolean; $hovered?: boolean; $color?: string }>`
  background: white;
  border: 2px solid ${props => props.$color ? hexToRgba(props.$color, 0.25) : theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: ${props => props.$color || theme.colors.periods.contemporary};
    box-shadow: ${props => props.$color ? `0 4px 12px ${hexToRgba(props.$color, 0.25)}` : theme.shadows.secondary};
    transform: translateY(-2px);
  }

  ${props => props.$selected && props.$color && `
    border-color: ${props.$color};
    background: ${hexToRgba(props.$color, 0.1)};
    box-shadow: 0 4px 12px ${hexToRgba(props.$color, 0.375)};
  `}

  ${props => props.$selected && !props.$color && `
    border-color: ${theme.colors.periods.contemporary};
    background: ${theme.colors.primaryLight};
    box-shadow: ${theme.shadows.primary};
  `}

  ${props => props.$hovered && !props.$selected && props.$color && `
    border-color: ${props.$color};
    box-shadow: 0 4px 12px ${hexToRgba(props.$color, 0.3)};
    background: ${hexToRgba(props.$color, 0.05)};
  `}

  ${props => props.$hovered && !props.$selected && !props.$color && `
    border-color: ${theme.colors.secondary};
    box-shadow: ${theme.shadows.secondary};
    background: ${theme.colors.secondaryLight};
  `}
`

const CardTitle = styled.div<{ $color?: string }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$color || theme.colors.text.primary};
  margin-bottom: 0.3rem;
`

const CardLocation = styled.div`
  font-size: 0.85rem;
  color: ${theme.colors.text.secondary};
`

