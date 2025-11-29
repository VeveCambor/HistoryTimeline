import styled from 'styled-components'
import { ReactNode } from 'react'
import YearBadge from './YearBadge'

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
  border: 2px solid ${props => props.$color ? `${props.$color}40` : '#e0e0e0'};
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: ${props => props.$color || '#FF8C00'};
    box-shadow: 0 4px 12px ${props => props.$color ? `${props.$color}40` : 'rgba(255, 140, 0, 0.2)'};
    transform: translateY(-2px);
  }

  ${props => props.$selected && props.$color && `
    border-color: ${props.$color};
    background: ${props.$color ? hexToRgba(props.$color, 0.1) : 'rgba(255, 215, 0, 0.1)'};
    box-shadow: 0 4px 12px ${props.$color ? `${props.$color}60` : 'rgba(255, 140, 0, 0.3)'};
  `}

  ${props => props.$selected && !props.$color && `
    border-color: #FF8C00;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.1) 50%, rgba(139, 69, 19, 0.1) 100%);
    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
  `}

  ${props => props.$hovered && !props.$selected && props.$color && `
    border-color: ${props.$color};
    box-shadow: 0 4px 12px ${props.$color ? `${props.$color}50` : 'rgba(255, 215, 0, 0.3)'};
    background: ${props.$color ? hexToRgba(props.$color, 0.05) : 'rgba(255, 215, 0, 0.05)'};
  `}

  ${props => props.$hovered && !props.$selected && !props.$color && `
    border-color: #ffd700;
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    background: rgba(255, 215, 0, 0.05);
  `}
`

const CardTitle = styled.div<{ $color?: string }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$color || '#333'};
  margin-bottom: 0.3rem;
`

// Pomocná funkce pro převod hex barvy na rgba
function hexToRgba(hex: string, alpha: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgba(102, 126, 234, ${alpha})`
}

const CardLocation = styled.div`
  font-size: 0.85rem;
  color: #666;
`

