import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { HistoricalEvent } from '../types'
import EventTooltip from './EventTooltip'

// Vytvoření custom ikon pro markery
const createMarkerIcon = (color: string = '#3388ff') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path fill="${color}" stroke="#fff" stroke-width="2" d="M12.5 0C5.596 0 0 5.596 0 12.5c0 8.75 12.5 28.5 12.5 28.5S25 21.25 25 12.5C25 5.596 19.404 0 12.5 0z"/>
        <circle fill="#fff" cx="12.5" cy="12.5" r="5"/>
      </svg>
    `,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  })
}

const defaultIcon = createMarkerIcon('#3388ff')
const hoverIcon = createMarkerIcon('#ffd700')

interface WorldMapProps {
  events: HistoricalEvent[]
  hoveredEvent: HistoricalEvent | null
  onEventSelect: (event: HistoricalEvent | null) => void
  onEventHover: (event: HistoricalEvent | null) => void
}

// Komponenta pro marker s tooltipem
function MarkerWithTooltip({ 
  event, 
  isHovered, 
  onEventSelect, 
  onEventHover, 
  navigate 
}: { 
  event: HistoricalEvent
  isHovered: boolean
  onEventSelect: (event: HistoricalEvent | null) => void
  onEventHover: (event: HistoricalEvent | null) => void
  navigate: (path: string) => void
}) {
  const handleMarkerClick = () => {
    onEventSelect(event)
    navigate(`/event/${event.id}`)
  }

  return (
    <Marker
      position={[event.coordinates.lat, event.coordinates.lng]}
      icon={isHovered ? hoverIcon : defaultIcon}
      eventHandlers={{
        click: handleMarkerClick,
        mouseover: (e) => {
          onEventHover(event)
          e.target.openTooltip()
        },
        mouseout: (e) => {
          onEventHover(null)
          e.target.closeTooltip()
        },
      }}
    >
      <Tooltip 
        permanent={false} 
        direction="top" 
        offset={[0, -10]}
        interactive={false}
      >
        <EventTooltip event={event} />
      </Tooltip>
      <Popup>
        <PopupContent>
          <h3>{event.title}</h3>
          <PopupYear>{event.year}</PopupYear>
          {event.location && (
            <PopupLocation>{event.location}</PopupLocation>
          )}
          <PopupButton onClick={handleMarkerClick}>
            Zobrazit detail
          </PopupButton>
        </PopupContent>
      </Popup>
    </Marker>
  )
}

function WorldMap({ events, hoveredEvent, onEventSelect, onEventHover }: WorldMapProps) {
  const navigate = useNavigate()

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
          
          const isHovered = hoveredEvent?.id === event.id
          
          return (
            <MarkerWithTooltip
              key={event.id}
              event={event}
              isHovered={isHovered}
              onEventSelect={onEventSelect}
              onEventHover={onEventHover}
              navigate={navigate}
            />
          )
        })}
      </StyledMapContainer>
    </WorldMapContainer>
  )
}

export default WorldMap

// Styled Components
const WorldMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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

