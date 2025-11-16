export interface Coordinates {
  lat: number
  lng: number
}

export interface HistoricalEvent {
  id: number
  year: number
  title: string
  location: string
  coordinates: Coordinates
  description: string
  details?: string
  tags?: string[]
  image?: string
}

