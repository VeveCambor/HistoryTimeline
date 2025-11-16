import styled from 'styled-components'
import { HistoricalEvent } from '../types'

interface EventTooltipProps {
  event: HistoricalEvent
}

function EventTooltip({ event }: EventTooltipProps) {
  return (
    <TooltipContainer>
      <TooltipYear>{event.year}</TooltipYear>
      <TooltipTitle>{event.title}</TooltipTitle>
    </TooltipContainer>
  )
}

export default EventTooltip

// Styled Components
const TooltipContainer = styled.div`
  text-align: center;
`

const TooltipYear = styled.div`
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`

const TooltipTitle = styled.div`
  font-size: 0.85rem;
  color: #333;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

