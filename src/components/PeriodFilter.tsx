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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex: 0 1 auto;
  }
`

const FilterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  white-space: nowrap;
`

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

