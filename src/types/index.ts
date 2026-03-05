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

export interface Model3DConfig {
  url: string
  type?: 'gltf' | 'glb' | 'sketchfab' // Typ modelu
  sketchfabId?: string // ID pro Sketchfab embed
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
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
  historicalBoundaries?: HistoricalBoundary[]
  period?: HistoricalPeriod
  wikipediaUrl?: string
  model3D?: Model3DConfig
}

