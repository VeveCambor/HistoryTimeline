import { useState } from 'react'
import styled from 'styled-components'
import WorldMap from '../components/WorldMap'
import Timeline from '../components/Timeline'
import { historicalEvents } from '../data/events'
import { HistoricalEvent } from '../types'

const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: white;

  @media (min-width: 1024px) {
    width: 50%;
    height: 600px;
  }
`

const TimelineContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    width: 50%;
  }
`

function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<HistoricalEvent | null>(null)

  return (
    <HomePageContainer>
      <Header>
        <h1>Historická časová osa</h1>
        <p>Prozkoumejte významné milníky v historii lidstva</p>
      </Header>
      
      <Content>
        <MapContainer>
          <WorldMap 
            events={historicalEvents}
            selectedEvent={selectedEvent}
            hoveredEvent={hoveredEvent}
            onEventSelect={setSelectedEvent}
            onEventHover={setHoveredEvent}
          />
        </MapContainer>
        
        <TimelineContainer>
          <Timeline 
            events={historicalEvents}
            selectedEvent={selectedEvent}
            onEventSelect={setSelectedEvent}
            onEventHover={setHoveredEvent}
          />
        </TimelineContainer>
      </Content>
    </HomePageContainer>
  )
}

export default HomePage

