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

