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
    color: '#654321',
    description: 'Starší doba kamenná'
  },
  // Doba kamenná - Mezolit
  {
    id: 'mesolithic',
    name: 'Mezolit',
    startYear: -10000,
    endYear: -8000,
    color: '#8B6F47',
    description: 'Střední doba kamenná'
  },
  // Doba kamenná - Neolit
  {
    id: 'neolithic',
    name: 'Neolit',
    startYear: -8000,
    endYear: -5000,
    color: '#D2B48C',
    description: 'Mladší doba kamenná'
  },
  // Doba měděná (Chalkolit/Eneolit)
  {
    id: 'copper',
    name: 'Doba měděná',
    startYear: -5000,
    endYear: -3000,
    color: '#B87333',
    description: 'Chalkolit/Eneolit'
  },
  // Doba bronzová
  {
    id: 'bronze',
    name: 'Doba bronzová',
    startYear: -3000,
    endYear: -1200,
    color: '#DAA520',
    description: 'Využití bronzu'
  },
  // Doba železná
  {
    id: 'iron',
    name: 'Doba železná',
    startYear: -1200,
    endYear: -800,
    color: '#2F4F4F',
    description: 'Využití železa'
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

