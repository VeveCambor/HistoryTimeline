import styled from 'styled-components'

interface LocationProps {
  location: string
}

function Location({ location }: LocationProps) {
  return <LocationContainer>📍 {location}</LocationContainer>
}

export default Location

// Styled Components
const LocationContainer = styled.span`
  font-size: 1.1rem;
  opacity: 0.9;
`

