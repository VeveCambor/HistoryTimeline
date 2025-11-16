export enum HistoricalPeriod {
  ALL = 'all',
  PREHISTORY = 'prehistory',
  ANCIENT = 'ancient',
  MEDIEVAL = 'medieval',
  MODERN = 'modern',
  CONTEMPORARY = 'contemporary'
}

export interface PeriodInfo {
  id: HistoricalPeriod
  name: string
  startYear: number
  endYear: number
  color: string
}

export const PERIODS: PeriodInfo[] = [
  {
    id: HistoricalPeriod.ALL,
    name: 'Všechna období',
    startYear: -10000,
    endYear: 2100,
    color: '#667eea'
  },
  {
    id: HistoricalPeriod.PREHISTORY,
    name: 'Pravěk',
    startYear: -10000,
    endYear: -3000,
    color: '#8B4513'
  },
  {
    id: HistoricalPeriod.ANCIENT,
    name: 'Starověk',
    startYear: -3000,
    endYear: 476,
    color: '#CD853F'
  },
  {
    id: HistoricalPeriod.MEDIEVAL,
    name: 'Středověk',
    startYear: 476,
    endYear: 1492,
    color: '#4169E1'
  },
  {
    id: HistoricalPeriod.MODERN,
    name: 'Novověk',
    startYear: 1492,
    endYear: 1789,
    color: '#9370DB'
  },
  {
    id: HistoricalPeriod.CONTEMPORARY,
    name: 'Moderní doba',
    startYear: 1789,
    endYear: 2100,
    color: '#FF6347'
  }
]

export function getPeriodForYear(year: number): HistoricalPeriod {
  for (const period of PERIODS) {
    if (period.id === HistoricalPeriod.ALL) continue
    if (year >= period.startYear && year < period.endYear) {
      return period.id
    }
  }
  return HistoricalPeriod.ALL
}

