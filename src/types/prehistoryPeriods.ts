export interface PrehistorySubPeriod {
  id: string
  name: string
  startYear: number
  endYear: number
  color: string
  description?: string
}

export const PREHISTORY_SUB_PERIODS: PrehistorySubPeriod[] = [
  // Doba kamenná - Paleolit
  {
    id: 'paleolithic',
    name: 'Paleolit',
    startYear: -100000,
    endYear: -10000,
    color: '#8B4513',
    description: 'Starší doba kamenná'
  },
  // Doba kamenná - Mezolit
  {
    id: 'mesolithic',
    name: 'Mezolit',
    startYear: -10000,
    endYear: -8000,
    color: '#A0522D',
    description: 'Střední doba kamenná'
  },
  // Doba kamenná - Neolit
  {
    id: 'neolithic',
    name: 'Neolit',
    startYear: -8000,
    endYear: -5000,
    color: '#CD853F',
    description: 'Mladší doba kamenná'
  }
]

export function getPrehistorySubPeriodForYear(year: number): PrehistorySubPeriod | null {
  for (const period of PREHISTORY_SUB_PERIODS) {
    if (year >= period.startYear && year < period.endYear) {
      return period
    }
  }
  return null
}

