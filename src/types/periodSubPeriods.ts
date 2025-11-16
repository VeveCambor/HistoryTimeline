export interface PeriodSubPeriod {
  id: string
  name: string
  startYear: number
  endYear: number
  color: string
  description?: string
  periodId: string // ID hlavního období
}

// Sub-periody pro Starověk
export const ANCIENT_SUB_PERIODS: PeriodSubPeriod[] = [
  {
    id: 'early_ancient',
    name: 'Raný starověk',
    startYear: -800,
    endYear: -500,
    color: '#CD853F',
    description: 'Vznik prvních civilizací',
    periodId: 'ancient'
  },
  {
    id: 'classical',
    name: 'Klasické období',
    startYear: -500,
    endYear: 0,
    color: '#D2691E',
    description: 'Řecko a Řím',
    periodId: 'ancient'
  },
  {
    id: 'late_ancient',
    name: 'Pozdní starověk',
    startYear: 0,
    endYear: 476,
    color: '#DEB887',
    description: 'Pád římské říše',
    periodId: 'ancient'
  }
]

// Sub-periody pro Středověk
export const MEDIEVAL_SUB_PERIODS: PeriodSubPeriod[] = [
  {
    id: 'early_medieval',
    name: 'Raný středověk',
    startYear: 476,
    endYear: 1000,
    color: '#4169E1',
    description: 'Temné období',
    periodId: 'medieval'
  },
  {
    id: 'high_medieval',
    name: 'Vrcholný středověk',
    startYear: 1000,
    endYear: 1300,
    color: '#6495ED',
    description: 'Rozkvět středověku',
    periodId: 'medieval'
  },
  {
    id: 'late_medieval',
    name: 'Pozdní středověk',
    startYear: 1300,
    endYear: 1492,
    color: '#87CEEB',
    description: 'Objevení Ameriky',
    periodId: 'medieval'
  }
]

// Sub-periody pro Novověk
export const MODERN_SUB_PERIODS: PeriodSubPeriod[] = [
  {
    id: 'renaissance',
    name: 'Renesance',
    startYear: 1492,
    endYear: 1600,
    color: '#9370DB',
    description: 'Období renesance',
    periodId: 'modern'
  },
  {
    id: 'enlightenment',
    name: 'Osvícenství',
    startYear: 1600,
    endYear: 1789,
    color: '#BA55D3',
    description: 'Věk rozumu',
    periodId: 'modern'
  }
]

// Sub-periody pro Moderní dobu
export const CONTEMPORARY_SUB_PERIODS: PeriodSubPeriod[] = [
  {
    id: 'industrial',
    name: 'Průmyslová revoluce',
    startYear: 1789,
    endYear: 1914,
    color: '#FF6347',
    description: 'Průmyslová éra',
    periodId: 'contemporary'
  },
  {
    id: 'world_wars',
    name: 'Světové války',
    startYear: 1914,
    endYear: 1945,
    color: '#DC143C',
    description: 'Období válek',
    periodId: 'contemporary'
  },
  {
    id: 'modern_era',
    name: 'Moderní éra',
    startYear: 1945,
    endYear: 2100,
    color: '#FF1493',
    description: 'Současnost',
    periodId: 'contemporary'
  }
]

export function getSubPeriodsForPeriod(periodId: string): PeriodSubPeriod[] {
  switch (periodId) {
    case 'ancient':
      return ANCIENT_SUB_PERIODS
    case 'medieval':
      return MEDIEVAL_SUB_PERIODS
    case 'modern':
      return MODERN_SUB_PERIODS
    case 'contemporary':
      return CONTEMPORARY_SUB_PERIODS
    default:
      return []
  }
}

