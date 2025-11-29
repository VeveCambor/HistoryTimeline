import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { HistoricalEvent } from '../types'
import { HistoricalPeriod } from '../types/periods'
import { PERIODS } from '../types/periods'

// Vytvoření custom ikon pro marker
const createMarkerIcon = (color: string = '#3388ff') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="30" height="50" viewBox="0 0 30 50" xmlns="http://www.w3.org/2000/svg">
        <path fill="${color}" stroke="#fff" stroke-width="2" d="M15 0C6.716 0 0 6.716 0 15c0 10.5 15 35 15 35S30 25.5 30 15C30 6.716 23.284 0 15 0z"/>
        <circle fill="#fff" cx="15" cy="15" r="6"/>
      </svg>
    `,
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    popupAnchor: [0, -50],
  })
}

interface EventLocationMapProps {
  event: HistoricalEvent
  selectedPeriod: HistoricalPeriod
}

function EventLocationMap({ event, selectedPeriod }: EventLocationMapProps) {
  const navigate = useNavigate()
  
  if (!event.coordinates) {
    return null
  }

  // Získat barvu období pro marker
  const periodColor = PERIODS.find(p => p.id === event.period)?.color || '#3388ff'
  const eventIcon = createMarkerIcon(periodColor)

  const handleMarkerClick = () => {
    navigate(`/event/${event.id}`, { state: { selectedPeriod } })
  }

  return (
    <MapContainerWrapper>
      <StyledMapContainer
        center={[event.coordinates.lat, event.coordinates.lng]}
        zoom={10}
        style={{ height: '400px', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[event.coordinates.lat, event.coordinates.lng]}
          icon={eventIcon}
          eventHandlers={{
            click: handleMarkerClick,
          }}
        >
          <Popup>
            <PopupContent>
              <PopupTitle>{event.title}</PopupTitle>
              {event.location && (
                <PopupLocation>📍 {event.location}</PopupLocation>
              )}
            </PopupContent>
          </Popup>
        </Marker>
      </StyledMapContainer>
    </MapContainerWrapper>
  )
}

export default EventLocationMap

// Styled Components
const MapContainerWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

const StyledMapContainer = styled(MapContainer)`
  z-index: 1;

  .custom-marker {
    background: transparent;
    border: none;
  }
`

const PopupContent = styled.div`
  min-width: 200px;
  text-align: center;
`

const PopupTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
`

const PopupLocation = styled.div`
  font-size: 0.9rem;
  color: #666;
`

