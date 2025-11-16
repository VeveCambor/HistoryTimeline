import styled from 'styled-components'
import { HistoricalEvent } from '../types'
import YearBadge from './ui/YearBadge'

interface EventTooltipProps {
  event: HistoricalEvent
}

function EventTooltip({ event }: EventTooltipProps) {
  return (
    <TooltipContainer>
      <YearBadge year={event.year} variant="tooltip" />
      <TooltipTitle>{event.title}</TooltipTitle>
    </TooltipContainer>
  )
}

export default EventTooltip

// Styled Components
const TooltipContainer = styled.div`
  text-align: center;
`

const TooltipTitle = styled.div`
  font-size: 0.85rem;
  color: #333;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

