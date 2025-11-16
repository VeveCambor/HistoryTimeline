import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { HistoricalEvent } from '../types'

// Oprava pro ikony markerů v Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const WorldMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledMapContainer = styled(MapContainer)`
  z-index: 1;
`

const PopupContent = styled.div`
  min-width: 200px;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
`

const PopupYear = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.3rem;
`

const PopupLocation = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`

const PopupButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  width: 100%;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`

interface WorldMapProps {
  events: HistoricalEvent[]
  selectedEvent: HistoricalEvent | null
  hoveredEvent: HistoricalEvent | null
  onEventSelect: (event: HistoricalEvent | null) => void
  onEventHover: (event: HistoricalEvent | null) => void
}

function WorldMap({ events, selectedEvent, hoveredEvent, onEventSelect, onEventHover }: WorldMapProps) {
  const navigate = useNavigate()

  const handleMarkerClick = (event: HistoricalEvent) => {
    onEventSelect(event)
    navigate(`/event/${event.id}`)
  }

  return (
    <WorldMapContainer>
      <StyledMapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => {
          if (!event.coordinates) return null
          
          return (
            <Marker
              key={event.id}
              position={[event.coordinates.lat, event.coordinates.lng]}
              eventHandlers={{
                click: () => handleMarkerClick(event),
                mouseover: () => onEventHover(event),
                mouseout: () => onEventHover(null),
              }}
            >
              <Popup>
                <PopupContent>
                  <h3>{event.title}</h3>
                  <PopupYear>{event.year}</PopupYear>
                  {event.location && (
                    <PopupLocation>{event.location}</PopupLocation>
                  )}
                  <PopupButton onClick={() => handleMarkerClick(event)}>
                    Zobrazit detail
                  </PopupButton>
                </PopupContent>
              </Popup>
            </Marker>
          )
        })}
      </StyledMapContainer>
    </WorldMapContainer>
  )
}

export default WorldMap

