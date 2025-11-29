import styled from 'styled-components'

interface EventImageProps {
  src: string
  alt: string
}

function EventImage({ src, alt }: EventImageProps) {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
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

