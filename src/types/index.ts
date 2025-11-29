export interface Coordinates {
  lat: number
  lng: number
}

export interface HistoricalBoundary {
  name: string
  coordinates: Coordinates[][]
  color?: string
}

import { HistoricalPeriod } from './periods'

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
  historicalBoundaries?: HistoricalBoundary[]
  period?: HistoricalPeriod
  wikipediaUrl?: string
}

