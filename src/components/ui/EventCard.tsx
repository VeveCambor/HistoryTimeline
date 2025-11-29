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
}

function EventCard({ 
  year, 
  title, 
  location, 
  selected = false, 
  hovered = false,
  onClick,
  onMouseEnter,
  onMouseLeave
}: EventCardProps) {
  return (
    <CardContainer
      $selected={selected}
      $hovered={hovered}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <YearBadge year={year} variant="card" />
      <CardTitle>{title}</CardTitle>
      {location && (
        <CardLocation>📍 {location}</CardLocation>
      )}
    </CardContainer>
  )
}

export default EventCard

// Styled Components
const CardContainer = styled.div<{ $selected?: boolean; $hovered?: boolean }>`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #FF8C00;
    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.2);
    transform: translateY(-2px);
  }

  ${props => props.$selected && `
    border-color: #FF8C00;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.1) 50%, rgba(139, 69, 19, 0.1) 100%);
    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
  `}

  ${props => props.$hovered && !props.$selected && `
    border-color: #ffd700;
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    background: rgba(255, 215, 0, 0.05);
  `}
`

const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`

const CardLocation = styled.div`
  font-size: 0.85rem;
  color: #666;
`

