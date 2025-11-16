import { MapContainer, TileLayer, Marker, Polygon } from 'react-leaflet'
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

interface HistoricalMapProps {
  event: HistoricalEvent
}

function HistoricalMap({ event }: HistoricalMapProps) {
  if (!event.historicalBoundaries || event.historicalBoundaries.length === 0) {
    return null
  }

  // Vypočítat bounds z historických hranic
  const allCoords: [number, number][] = []
  event.historicalBoundaries.forEach(boundary => {
    boundary.coordinates.forEach(ring => {
      ring.forEach(coord => {
        allCoords.push([coord.lat, coord.lng])
      })
    })
  })

  // Vypočítat střed a zoom
  const lats = allCoords.map(c => c[0])
  const lngs = allCoords.map(c => c[1])
  const center: [number, number] = [
    (Math.max(...lats) + Math.min(...lats)) / 2,
    (Math.max(...lngs) + Math.min(...lngs)) / 2
  ]

  return (
    <MapContainerWrapper>
      <StyledMapContainer
        center={center}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {event.historicalBoundaries.map((boundary, index) => (
          <Polygon
            key={index}
            positions={boundary.coordinates.map(ring => 
              ring.map(coord => [coord.lat, coord.lng] as [number, number])
            )}
            pathOptions={{
              color: boundary.color || '#667eea',
              fillColor: boundary.color || '#667eea',
              fillOpacity: 0.3,
              weight: 2,
            }}
          />
        ))}
        <Marker position={center} />
      </StyledMapContainer>
      <Legend>
        {event.historicalBoundaries.map((boundary, index) => (
          <LegendItem key={index}>
            <LegendColor style={{ backgroundColor: boundary.color || '#667eea' }} />
            <LegendText>{boundary.name}</LegendText>
          </LegendItem>
        ))}
      </Legend>
    </MapContainerWrapper>
  )
}

export default HistoricalMap

// Styled Components
const MapContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: white;
`

const StyledMapContainer = styled(MapContainer)`
  z-index: 1;
`

const Legend = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: white;
  padding: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

const LegendText = styled.span`
  font-size: 0.85rem;
  color: #333;
`

