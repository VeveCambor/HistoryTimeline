import styled from 'styled-components'
import { HistoricalPeriod, PERIODS } from '../types/periods'
import FilterButton from './ui/FilterButton'

interface PeriodFilterProps {
  selectedPeriod: HistoricalPeriod
  onPeriodChange: (period: HistoricalPeriod) => void
}

function PeriodFilter({ selectedPeriod, onPeriodChange }: PeriodFilterProps) {
  return (
    <FilterContainer>
      <FilterTitle>Historická období:</FilterTitle>
      <FilterButtons>
        {PERIODS.map((period) => (
          <FilterButton
            key={period.id}
            active={selectedPeriod === period.id}
            color={period.color}
            onClick={() => onPeriodChange(period.id)}
          >
            {period.name}
          </FilterButton>
        ))}
      </FilterButtons>
    </FilterContainer>
  )
}

export default PeriodFilter

// Styled Components
const FilterContainer = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
`

const FilterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
`

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

