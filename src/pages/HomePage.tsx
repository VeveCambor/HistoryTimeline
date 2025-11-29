import { useState, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import WorldMap from '../components/WorldMap'
import Timeline from '../components/Timeline'
import PeriodFilter from '../components/PeriodFilter'
import SearchInput from '../components/ui/SearchInput'
import { historicalEvents } from '../data/events'
import { HistoricalEvent } from '../types'
import { HistoricalPeriod } from '../types/periods'

function HomePage() {
  const location = useLocation()
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<HistoricalEvent | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod>(HistoricalPeriod.ALL)
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Obnovit vybrané období a vyhledávací dotaz z location state
  useEffect(() => {
    if (location.state) {
      const state = location.state as { selectedPeriod?: HistoricalPeriod; searchQuery?: string }
      if (state.selectedPeriod) {
        setSelectedPeriod(state.selectedPeriod)
      }
      if (state.searchQuery) {
        setSearchQuery(state.searchQuery)
      }
    }
  }, [location.state])

  // Filtrovat události podle vybraného období a vyhledávacího dotazu
  const filteredEvents = useMemo(() => {
    let events = historicalEvents

    // Filtrovat podle období
    if (selectedPeriod !== HistoricalPeriod.ALL) {
      events = events.filter(event => event.period === selectedPeriod)
    }

    // Filtrovat podle vyhledávacího dotazu
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      events = events.filter(event => {
        const titleMatch = event.title.toLowerCase().includes(query)
        const descriptionMatch = event.description.toLowerCase().includes(query)
        const locationMatch = event.location.toLowerCase().includes(query)
        const tagsMatch = event.tags?.some(tag => tag.toLowerCase().includes(query))
        const yearMatch = event.year.toString().includes(query)
        
        return titleMatch || descriptionMatch || locationMatch || tagsMatch || yearMatch
      })
    }

    return events
  }, [selectedPeriod, searchQuery])

  return (
    <HomePageContainer>
      <Header>
        <RuinsIcon>🏛️</RuinsIcon>
        <TimelineIcon>⏳</TimelineIcon>
        <h1>Historická časová osa</h1>
        <p>Prozkoumejte významné milníky v historii lidstva</p>
      </Header>
      
      <Content>
        <MapContainer>
          <WorldMap 
            events={filteredEvents}
            hoveredEvent={hoveredEvent}
            selectedPeriod={selectedPeriod}
            onEventSelect={setSelectedEvent}
            onEventHover={setHoveredEvent}
          />
        </MapContainer>
        
        <TimelineContainer>
          <FiltersContainer>
            <PeriodFilter 
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
            <SearchInput 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Vyhledat události podle názvu, místa, roku..."
            />
          </FiltersContainer>
          <Timeline 
            events={filteredEvents}
            selectedEvent={selectedEvent}
            hoveredEvent={hoveredEvent}
            selectedPeriod={selectedPeriod}
            onEventSelect={setSelectedEvent}
            onEventHover={setHoveredEvent}
            onPeriodChange={setSelectedPeriod}
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
  position: relative;
  background: linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #8B4513 100%);
  color: white;
  padding: 1.5rem 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.3rem;
    font-weight: 800;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.3px;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 0.95rem;
    opacity: 0.95;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`

const RuinsIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  opacity: 0.3;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    top: 0.5rem;
    left: 0.5rem;
  }
`

const TimelineIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 4.5rem;
  font-size: 3rem;
  opacity: 0.3;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    top: 0.5rem;
    left: 3rem;
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

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
`
