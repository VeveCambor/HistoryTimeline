import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { historicalEvents } from '../data/events'

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
`

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

const Meta = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`

const Year = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
`

const Location = styled.span`
  font-size: 1.1rem;
  opacity: 0.9;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const Section = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
  }
`

const TagsContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
`

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`

const NotFound = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
`

const BackLink = styled(Link)`
  display: inline-block;
  color: #667eea;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #764ba2;
  }
`

function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const event = historicalEvents.find(e => e.id === parseInt(id || '0', 10))

  if (!event) {
    return (
      <EventDetailContainer>
        <NotFound>
          <h2>Událost nenalezena</h2>
          <BackLink to="/">
            ← Zpět na hlavní stránku
          </BackLink>
        </NotFound>
      </EventDetailContainer>
    )
  }

  return (
    <EventDetailContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          ← Zpět
        </BackButton>
        <h1>{event.title}</h1>
        <Meta>
          <Year>{event.year}</Year>
          {event.location && (
            <Location>📍 {event.location}</Location>
          )}
        </Meta>
      </Header>

      <Content>
        {event.image && (
          <ImageContainer>
            <Image 
              src={event.image} 
              alt={event.title}
            />
          </ImageContainer>
        )}

        <Section>
          <h2>Popis události</h2>
          <p>{event.description}</p>
        </Section>

        {event.details && (
          <Section>
            <h2>Další informace</h2>
            <p>{event.details}</p>
          </Section>
        )}

        {event.tags && event.tags.length > 0 && (
          <TagsContainer>
            <h2>Štítky</h2>
            <TagsList>
              {event.tags.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                </Tag>
              ))}
            </TagsList>
          </TagsContainer>
        )}
      </Content>
    </EventDetailContainer>
  )
}

export default EventDetail

