import styled from 'styled-components'
import { useEventImage } from '../../hooks/useEventImage'

interface EventImageProps {
  src: string
  alt: string
}

function EventImage({ src, alt }: EventImageProps) {
  const [url, loading] = useEventImage(src)
  const displayUrl = url

  if (!displayUrl && loading) {
    return (
      <ImageContainer>
        <Placeholder>Načítání obrázku…</Placeholder>
      </ImageContainer>
    )
  }
  if (!displayUrl) return null

  return (
    <ImageContainer>
      <Image src={displayUrl} alt={alt} />
    </ImageContainer>
  )
}

export default EventImage

// Styled Components
const ImageContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 2rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Placeholder = styled.div`
  padding: 3rem;
  text-align: center;
  color: var(--color-text-secondary, #666);
  background: var(--color-border, #eee);
  border-radius: 12px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-height: 600px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-height: 400px;
  }
`

