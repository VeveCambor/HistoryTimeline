import { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { historicalEvents } from '../data/events'
import HistoricalMap from '../components/HistoricalMap'
import EventLocationMap from '../components/EventLocationMap'
import BackButton from '../components/ui/BackButton'
import Section from '../components/ui/Section'
import TagsList from '../components/ui/TagsList'
import EventImage from '../components/ui/EventImage'
import YearBadge from '../components/ui/YearBadge'
import Location from '../components/ui/Location'
import Meta from '../components/ui/Meta'
import NotFound from '../components/ui/NotFound'
import Link from '../components/ui/Link'
import Quiz from '../components/ui/Quiz'
import QuizButton from '../components/ui/QuizButton'
import Modal from '../components/ui/Modal'
import { HistoricalPeriod, PERIODS } from '../types/periods'
import { eventQuizQuestions } from '../data/quizQuestions'

function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const [isQuizOpen, setIsQuizOpen] = useState(false)
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

  // Získat barvu období pro událost
  const periodColor = PERIODS.find(p => p.id === event.period)?.color || '#667eea'

  // Získat kvízové otázky pro tuto událost
  const quizQuestions = eventQuizQuestions[event.id] || []

  const handleQuizComplete = (score: number, total: number) => {
    // Uložit skóre do localStorage
    const quizStats = JSON.parse(localStorage.getItem('quizStats') || '{}')
    if (!quizStats[event.id]) {
      quizStats[event.id] = { attempts: 0, bestScore: 0, totalQuestions: total }
    }
    quizStats[event.id].attempts++
    if (score > quizStats[event.id].bestScore) {
      quizStats[event.id].bestScore = score
    }
    localStorage.setItem('quizStats', JSON.stringify(quizStats))
  }

  return (
    <EventDetailContainer>
      <Header $hasImage={!!event.image} $imageUrl={event.image} $periodColor={periodColor}>
        <BackButton onClick={handleBack} />
        <h1>{event.title}</h1>
        <Meta>
          <YearBadge year={event.year} variant="header" color={periodColor} />
          {event.location && (
            <Location location={event.location} />
          )}
        </Meta>
        {quizQuestions.length > 0 && (
          <QuizButton 
            onClick={() => setIsQuizOpen(true)} 
            color={periodColor}
            hasQuestions={true}
          />
        )}
      </Header>

      <Content>
        {event.image && (
          <EventImage src={event.image} alt={event.title} />
        )}

        <Section title="Popis události" color={periodColor}>
          <p>{event.description}</p>
        </Section>

        {event.details && (
          <Section title="Další informace" color={periodColor}>
            <p>{event.details}</p>
            {event.wikipediaUrl && (
              <WikipediaLink href={event.wikipediaUrl} target="_blank" rel="noopener noreferrer" $color={periodColor}>
                Pro více info: Wikipedie
              </WikipediaLink>
            )}
          </Section>
        )}

        {event.coordinates && (
          <Section title="Mapa oblasti" color={periodColor}>
            <EventLocationMap event={event} selectedPeriod={selectedPeriod} />
          </Section>
        )}

        {event.historicalBoundaries && event.historicalBoundaries.length > 0 && (
          <Section title="Historická mapa" color={periodColor}>
            <HistoricalMap event={event} />
          </Section>
        )}

        {event.tags && event.tags.length > 0 && (
          <TagsSection>
            <TagsSectionTitle>Štítky</TagsSectionTitle>
            <TagsList tags={event.tags} onTagClick={handleTagClick} color={periodColor} />
          </TagsSection>
        )}
      </Content>

      <Modal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        title="Otestujte své znalosti"
        color={periodColor}
      >
        <Quiz 
          questions={quizQuestions} 
          color={periodColor}
          onComplete={handleQuizComplete}
        />
      </Modal>
    </EventDetailContainer>
  )
}

export default EventDetail

// Styled Components
const EventDetailContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`

const Header = styled.div<{ $hasImage?: boolean; $imageUrl?: string; $periodColor: string }>`
  position: relative;
  background: ${props => {
    const colorRgb = hexToRgb(props.$periodColor)
    const overlayColor = colorRgb ? `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, 0.85)` : 'rgba(102, 126, 234, 0.85)'
    
    if (props.$hasImage && props.$imageUrl) {
      return `linear-gradient(135deg, ${overlayColor} 0%, ${overlayColor} 100%), url('${props.$imageUrl}') center/cover`
    }
    return `linear-gradient(135deg, ${overlayColor} 0%, ${overlayColor} 100%), url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80") center/cover`
  }};
  color: white;
  padding: 3rem 2rem;
  padding-right: 5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: visible;
  min-height: 200px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => {
      const colorRgb = hexToRgb(props.$periodColor)
      return colorRgb ? `linear-gradient(135deg, rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, 0.75) 0%, rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, 0.75) 100%)` : 'linear-gradient(135deg, rgba(102, 126, 234, 0.75) 0%, rgba(118, 75, 162, 0.75) 100%)'
    }};
    z-index: 1;
  }

  > *:not(.quiz-button) {
    position: relative;
    z-index: 2;
  }

  .quiz-button {
    position: absolute !important;
    z-index: 10 !important;
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

const WikipediaLink = styled.a<{ $color: string }>`
  display: inline-block;
  margin-top: 1rem;
  color: ${props => props.$color};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${props => props.$color};
    opacity: 0.8;
  }
`

// Pomocná funkce pro převod hex barvy na RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}
