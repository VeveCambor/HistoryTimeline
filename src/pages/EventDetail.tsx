import { useParams } from 'react-router-dom'
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

function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const event = historicalEvents.find(e => e.id === parseInt(id || '0', 10))

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
      <Header>
        <BackButton />
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
            <TagsList tags={event.tags} />
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

const Header = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
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
