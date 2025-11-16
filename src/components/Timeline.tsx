import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { HistoricalEvent } from '../types'

interface TimelineProps {
  events: HistoricalEvent[]
  selectedEvent: HistoricalEvent | null
  onEventSelect: (event: HistoricalEvent | null) => void
  onEventHover: (event: HistoricalEvent | null) => void
}

function Timeline({ events, selectedEvent, onEventSelect, onEventHover }: TimelineProps) {
  const navigate = useNavigate()

  // Seřadit události podle roku
  const sortedEvents = [...events].sort((a, b) => a.year - b.year)

  // Najít nejstarší a nejnovější rok pro výpočet pozice
  const minYear = Math.min(...events.map(e => e.year))
  const maxYear = Math.max(...events.map(e => e.year))
  const yearRange = maxYear - minYear

  const handleEventClick = (event: HistoricalEvent) => {
    onEventSelect(event)
    navigate(`/event/${event.id}`)
  }

  const calculatePosition = (year: number): number => {
    if (yearRange === 0) return 50
    return ((year - minYear) / yearRange) * 100
  }

  return (
    <TimelineContainer>
      <Title>Časová osa</Title>
      <Container>
        <Line>
          {sortedEvents.map((event) => {
            const position = calculatePosition(event.year)
            const isSelected = selectedEvent?.id === event.id
            
            return (
              <Point
                key={event.id}
                $selected={isSelected}
                style={{ left: `${position}%` }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={() => onEventHover(event)}
                onMouseLeave={() => onEventHover(null)}
                title={`${event.title} (${event.year})`}
              >
                <PointMarker $selected={isSelected} />
                <PointTooltip>
                  <PointYear>{event.year}</PointYear>
                  <PointTitle>{event.title}</PointTitle>
                </PointTooltip>
              </Point>
            )
          })}
        </Line>
        
        <YearLabels>
          <YearLabel>{minYear}</YearLabel>
          <YearLabel>{maxYear}</YearLabel>
        </YearLabels>
      </Container>

      <EventsList>
        <EventsTitle>Všechny události</EventsTitle>
        <EventsGrid>
          {sortedEvents.map((event) => {
            const isSelected = selectedEvent?.id === event.id
            
            return (
              <EventCard
                key={event.id}
                $selected={isSelected}
                onClick={() => handleEventClick(event)}
                onMouseEnter={() => onEventHover(event)}
                onMouseLeave={() => onEventHover(null)}
              >
                <EventYear>{event.year}</EventYear>
                <EventTitle>{event.title}</EventTitle>
                {event.location && (
                  <EventLocation>📍 {event.location}</EventLocation>
                )}
              </EventCard>
            )
          })}
        </EventsGrid>
      </EventsList>
    </TimelineContainer>
  )
}

export default Timeline

// Styled Components
const TimelineContainer = styled.div`
  width: 100%;
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`

const Container = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding: 1rem 0;
`

const Line = styled.div`
  position: relative;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  margin: 0 1rem;
`

const Point = styled.div<{ $selected?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
`

const PointMarker = styled.div<{ $selected?: boolean }>`
  width: 20px;
  height: 20px;
  background: white;
  border: 3px solid #667eea;
  border-radius: 50%;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${props => props.$selected && `
    width: 28px;
    height: 28px;
    background: #667eea;
    border-color: #764ba2;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  `}

  ${Point}:hover & {
    width: 28px;
    height: 28px;
    background: #667eea;
    border-color: #764ba2;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`

const PointTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  ${Point}:hover & {
    opacity: 1;
  }
`

const PointYear = styled.div`
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`

const PointTitle = styled.div`
  font-size: 0.85rem;
  color: #333;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const YearLabels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 0.5rem;
`

const YearLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`

const EventsList = styled.div`
  margin-top: 1rem;
`

const EventsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`

const EventCard = styled.div<{ $selected?: boolean }>`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }

  ${props => props.$selected && `
    border-color: #667eea;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  `}
`

const EventYear = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`

const EventTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`

const EventLocation = styled.div`
  font-size: 0.85rem;
  color: #666;
`
