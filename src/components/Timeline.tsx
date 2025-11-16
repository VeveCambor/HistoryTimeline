import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { HistoricalEvent } from '../types'
import { HistoricalPeriod, PERIODS } from '../types/periods'
import { PREHISTORY_SUB_PERIODS } from '../types/prehistoryPeriods'
import EventTooltip from './EventTooltip'
import EventCard from './ui/EventCard'
import PeriodCard from './ui/PeriodCard'

interface TimelineProps {
  events: HistoricalEvent[]
  selectedEvent: HistoricalEvent | null
  hoveredEvent: HistoricalEvent | null
  selectedPeriod: HistoricalPeriod
  onEventSelect: (event: HistoricalEvent | null) => void
  onEventHover: (event: HistoricalEvent | null) => void
}

function Timeline({ events, selectedEvent, hoveredEvent, selectedPeriod, onEventSelect, onEventHover }: TimelineProps) {
  const navigate = useNavigate()

  // Seřadit události podle roku
  const sortedEvents = [...events].sort((a, b) => a.year - b.year)

  // Určit rozsah časové osy podle vybraného období
  let displayMinYear = -12000
  let displayMaxYear = 2025
  
  if (selectedPeriod !== HistoricalPeriod.ALL) {
    const selectedPeriodInfo = PERIODS.find(p => p.id === selectedPeriod)
    if (selectedPeriodInfo) {
      // Pro pravěk použij -12000 jako minimum (protože pravěk začíná dříve)
      if (selectedPeriod === HistoricalPeriod.PREHISTORY) {
        displayMinYear = -12000
      } else {
        displayMinYear = selectedPeriodInfo.startYear
      }
      displayMaxYear = selectedPeriodInfo.endYear
    }
  }
  
  const yearRange = displayMaxYear - displayMinYear

  const handleEventClick = (event: HistoricalEvent) => {
    onEventSelect(event)
    navigate(`/event/${event.id}`)
  }

  const calculatePosition = (year: number): number => {
    if (yearRange === 0) return 50
    return ((year - displayMinYear) / yearRange) * 100
  }

  // Filtrovat sub-periody - zobrazit pouze když je vybraný pravěk
  const visibleSubPeriods = selectedPeriod === HistoricalPeriod.PREHISTORY
    ? PREHISTORY_SUB_PERIODS.filter(period => {
        return (period.startYear <= displayMaxYear && period.endYear >= displayMinYear)
      })
    : []

  // Pro "Všechna období" zobrazit hlavní období jako legendu
  const visibleMainPeriods = selectedPeriod === HistoricalPeriod.ALL 
    ? PERIODS.filter(period => {
        if (period.id === HistoricalPeriod.ALL) return false
        return (period.startYear <= displayMaxYear && period.endYear >= displayMinYear)
      })
    : []

  return (
    <TimelineContainer>
      <Title>Časová osa</Title>
      <Container>
        {/* Zobrazit sub-periody pravěku jako samostatnou vrstvu pod časovou osou */}
        {visibleSubPeriods.length > 0 && (
          <SubPeriodsContainer>
            {visibleSubPeriods.map((subPeriod) => {
              const startPos = calculatePosition(Math.max(subPeriod.startYear, displayMinYear))
              const endPos = calculatePosition(Math.min(subPeriod.endYear, displayMaxYear))
              const width = endPos - startPos
              
              if (width <= 0) return null
              
              return (
                <SubPeriodBar
                  key={subPeriod.id}
                  $color={subPeriod.color}
                  style={{
                    left: `${startPos}%`,
                    width: `${width}%`,
                  }}
                  title={subPeriod.name}
                />
              )
            })}
          </SubPeriodsContainer>
        )}
        
        {/* Zobrazit hlavní období jako barevné pruhy pro "Všechna období" */}
        {visibleMainPeriods.length > 0 && (
          <MainPeriodsContainer>
            {visibleMainPeriods.map((period) => {
              const startPos = calculatePosition(Math.max(period.startYear, displayMinYear))
              const endPos = calculatePosition(Math.min(period.endYear, displayMaxYear))
              const width = endPos - startPos
              
              if (width <= 0) return null
              
              return (
                <MainPeriodBar
                  key={period.id}
                  $color={period.color}
                  style={{
                    left: `${startPos}%`,
                    width: `${width}%`,
                  }}
                  title={period.name}
                />
              )
            })}
          </MainPeriodsContainer>
        )}
        
        <Line>
          {sortedEvents.map((event) => {
            const position = calculatePosition(event.year)
            const isSelected = selectedEvent?.id === event.id
            const isHovered = hoveredEvent?.id === event.id
            
            return (
              <Point
                key={event.id}
                $selected={isSelected}
                $hovered={isHovered}
                style={{ left: `${position}%` }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={() => onEventHover(event)}
                onMouseLeave={() => onEventHover(null)}
                title={`${event.title} (${event.year})`}
              >
                <PointMarker $selected={isSelected} $hovered={isHovered} />
                <PointTooltip>
                  <EventTooltip event={event} />
                </PointTooltip>
              </Point>
            )
          })}
        </Line>
        
        <YearLabels>
          <YearLabel>{displayMinYear}</YearLabel>
          <YearLabel>{displayMaxYear}</YearLabel>
        </YearLabels>
        
        {/* Legenda - sub-periody pro pravěk nebo hlavní období pro "Všechna období" */}
        {visibleSubPeriods.length > 0 && (
          <SubPeriodLegend>
            {visibleSubPeriods.map((subPeriod) => (
              <SubPeriodLegendItem key={subPeriod.id}>
                <SubPeriodLegendColor $color={subPeriod.color} />
                <SubPeriodLegendText>
                  <SubPeriodLegendName>{subPeriod.name}</SubPeriodLegendName>
                  {subPeriod.description && (
                    <SubPeriodLegendDesc>{subPeriod.description}</SubPeriodLegendDesc>
                  )}
                </SubPeriodLegendText>
              </SubPeriodLegendItem>
            ))}
          </SubPeriodLegend>
        )}
        
        {/* Legenda hlavních období pro "Všechna období" */}
        {visibleMainPeriods.length > 0 && (
          <MainPeriodLegend>
            {visibleMainPeriods.map((period) => (
              <MainPeriodLegendItem key={period.id}>
                <MainPeriodLegendColor $color={period.color} />
                <MainPeriodLegendText>{period.name}</MainPeriodLegendText>
              </MainPeriodLegendItem>
            ))}
          </MainPeriodLegend>
        )}
      </Container>

      {/* Zobrazit kartičky sub-period pro pravěk */}
      {visibleSubPeriods.length > 0 && (
        <PeriodsList>
          <PeriodsTitle>Období pravěku</PeriodsTitle>
          <PeriodsGrid>
            {visibleSubPeriods.map((subPeriod) => (
              <PeriodCard
                key={subPeriod.id}
                period={subPeriod}
                onClick={() => navigate(`/period/${subPeriod.id}`, { 
                  state: { selectedPeriod } 
                })}
              />
            ))}
          </PeriodsGrid>
        </PeriodsList>
      )}

      <EventsList>
        <EventsTitle>Všechny události</EventsTitle>
        <EventsGrid>
          {sortedEvents.map((event) => {
            const isSelected = selectedEvent?.id === event.id
            const isHovered = hoveredEvent?.id === event.id
            
            return (
              <EventCard
                key={event.id}
                year={event.year}
                title={event.title}
                location={event.location}
                selected={isSelected}
                hovered={isHovered}
                onClick={() => handleEventClick(event)}
                onMouseEnter={() => onEventHover(event)}
                onMouseLeave={() => onEventHover(null)}
              />
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
  padding: 2rem 0 1rem 0;
`

const Line = styled.div`
  position: relative;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  margin: 0 1rem;
  margin-top: 12px;
  z-index: 1;
`

const Point = styled.div<{ $selected?: boolean; $hovered?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
`

const PointMarker = styled.div<{ $selected?: boolean; $hovered?: boolean }>`
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

  ${props => props.$hovered && !props.$selected && `
    width: 24px;
    height: 24px;
    background: #ffd700;
    border-color: #ffd700;
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
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

const PeriodsList = styled.div`
  margin-bottom: 2rem;
`

const PeriodsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`

const PeriodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`

const SubPeriodsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  right: 1rem;
  height: 8px;
  pointer-events: none;
  z-index: 0;
  border-radius: 4px;
  overflow: hidden;
`

const SubPeriodBar = styled.div<{ $color: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  background: ${props => props.$color};
  opacity: 0.6;
  border-radius: 2px;
  transition: opacity 0.3s;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }
`

const SubPeriodLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`

const SubPeriodLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const SubPeriodLegendColor = styled.div<{ $color: string }>`
  width: 16px;
  height: 16px;
  background: ${props => props.$color};
  border-radius: 4px;
  flex-shrink: 0;
`

const SubPeriodLegendText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

const SubPeriodLegendName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
`

const SubPeriodLegendDesc = styled.span`
  font-size: 0.75rem;
  color: #666;
`

const MainPeriodLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`

const MainPeriodLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const MainPeriodLegendColor = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  background: ${props => props.$color};
  border-radius: 4px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const MainPeriodLegendText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
`

const MainPeriodsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  right: 1rem;
  height: 8px;
  pointer-events: none;
  z-index: 0;
  border-radius: 4px;
  overflow: hidden;
`

const MainPeriodBar = styled.div<{ $color: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  background: ${props => props.$color};
  opacity: 0.5;
  border-radius: 2px;
  transition: opacity 0.3s;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.7;
  }
`

