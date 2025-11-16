import { useState, useMemo } from 'react'
import styled from 'styled-components'
import WorldMap from '../components/WorldMap'
import Timeline from '../components/Timeline'
import PeriodFilter from '../components/PeriodFilter'
import { historicalEvents } from '../data/events'
import { HistoricalEvent } from '../types'
import { HistoricalPeriod } from '../types/periods'

function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<HistoricalEvent | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod>(HistoricalPeriod.ALL)

  // Filtrovat události podle vybraného období
  const filteredEvents = useMemo(() => {
    if (selectedPeriod === HistoricalPeriod.ALL) {
      return historicalEvents
    }
    return historicalEvents.filter(event => event.period === selectedPeriod)
  }, [selectedPeriod])

  return (
    <HomePageContainer>
      <Header>
        <h1>Historická časová osa</h1>
        <p>Prozkoumejte významné milníky v historii lidstva</p>
      </Header>
      
      <Content>
        <MapContainer>
          <WorldMap 
            events={filteredEvents}
            hoveredEvent={hoveredEvent}
            onEventSelect={setSelectedEvent}
            onEventHover={setHoveredEvent}
          />
        </MapContainer>
        
        <TimelineContainer>
          <PeriodFilter 
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
          <Timeline 
            events={filteredEvents}
            selectedEvent={selectedEvent}
            hoveredEvent={hoveredEvent}
            selectedPeriod={selectedPeriod}
            onEventSelect={setSelectedEvent}
            onEventHover={setHoveredEvent}
          />
        </TimelineContainer>
      </Content>
    </HomePageContainer>
  )
}

export default HomePage

// Styled Components
const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;

  @media (min-width: 1024px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: white;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    height: 400px;
  }
`

const TimelineContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`
