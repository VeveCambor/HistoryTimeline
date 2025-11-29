import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { historicalEvents } from '../data/events'
import HistoricalMap from '../components/HistoricalMap'
import BackButton from '../components/ui/BackButton'
import Section from '../components/ui/Section'
import TagsList from '../components/ui/TagsList'
import EventImage from '../components/ui/EventImage'
import YearBadge from '../components/ui/YearBadge'
import Location from '../components/ui/Location'
import Meta from '../components/ui/Meta'
import NotFound from '../components/ui/NotFound'
import Link from '../components/ui/Link'
import { HistoricalPeriod } from '../types/periods'

function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const event = historicalEvents.find(e => e.id === parseInt(id || '0', 10))

  // Získat vybrané období z location state
  const selectedPeriod = (location.state as { selectedPeriod?: HistoricalPeriod })?.selectedPeriod || HistoricalPeriod.ALL

  const handleBack = () => {
    navigate('/', { state: { selectedPeriod } })
  }

  const handleTagClick = (tag: string) => {
    navigate('/', { state: { selectedPeriod, searchQuery: tag } })
  }

  if (!event) {
    return (
      <EventDetailContainer>
        <NotFound title="Událost nenalezena">
          <Link to="/">
            ← Zpět na hlavní stránku
          </Link>
        </NotFound>
      </EventDetailContainer>
    )
  }

  return (
    <EventDetailContainer>
      <Header $hasImage={!!event.image} $imageUrl={event.image}>
        <BackButton onClick={handleBack} />
        <h1>{event.title}</h1>
        <Meta>
          <YearBadge year={event.year} variant="header" />
          {event.location && (
            <Location location={event.location} />
          )}
        </Meta>
      </Header>

      <Content>
        {event.image && (
          <EventImage src={event.image} alt={event.title} />
        )}

        <Section title="Popis události">
          <p>{event.description}</p>
        </Section>

        {event.details && (
          <Section title="Další informace">
            <p>{event.details}</p>
          </Section>
        )}

        {event.historicalBoundaries && event.historicalBoundaries.length > 0 && (
          <Section title="Historická mapa">
            <HistoricalMap event={event} />
          </Section>
        )}

        {event.tags && event.tags.length > 0 && (
          <TagsSection>
            <TagsSectionTitle>Štítky</TagsSectionTitle>
            <TagsList tags={event.tags} onTagClick={handleTagClick} />
          </TagsSection>
        )}
      </Content>
    </EventDetailContainer>
  )
}

export default EventDetail

// Styled Components
const EventDetailContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`

const Header = styled.div<{ $hasImage?: boolean; $imageUrl?: string }>`
  position: relative;
  background: ${props => 
    props.$hasImage && props.$imageUrl
      ? `linear-gradient(135deg, rgba(255, 215, 0, 0.85) 0%, rgba(255, 140, 0, 0.85) 50%, rgba(139, 69, 19, 0.85) 100%), url('${props.$imageUrl}') center/cover`
      : 'linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 140, 0, 0.9) 50%, rgba(139, 69, 19, 0.9) 100%), url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80") center/cover'
  };
  color: white;
  padding: 3rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.75) 0%, rgba(255, 140, 0, 0.75) 50%, rgba(139, 69, 19, 0.75) 100%);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    letter-spacing: -0.5px;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  button {
    margin-bottom: 1rem;
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const TagsSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const TagsSectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`
