import styled from 'styled-components'
import { PeriodInfo } from '../../types/periods'

interface MainPeriodCardProps {
  period: PeriodInfo
  onClick: () => void
}

function MainPeriodCard({ period, onClick }: MainPeriodCardProps) {
  return (
    <CardContainer onClick={onClick} $color={period.color}>
      <PeriodColorBar $color={period.color} />
      <CardContent>
        <PeriodName>{period.name}</PeriodName>
        <PeriodYears>
          {period.startYear < 0 ? `${Math.abs(period.startYear)} př. n. l.` : `${period.startYear} n. l.`} - {period.endYear < 0 ? `${Math.abs(period.endYear)} př. n. l.` : `${period.endYear} n. l.`}
        </PeriodYears>
      </CardContent>
    </CardContainer>
  )
}

export default MainPeriodCard

// Styled Components
const CardContainer = styled.div<{ $color: string }>`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${props => props.$color};
    background: ${props => `${props.$color}10`};
    box-shadow: 0 4px 12px ${props => `${props.$color}40`};
    transform: translateY(-2px);
  }
`

const PeriodColorBar = styled.div<{ $color: string }>`
  width: 100%;
  height: 4px;
  background: ${props => props.$color};
`

const CardContent = styled.div`
  padding: 1rem;
`

const PeriodName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`

const PeriodYears = styled.div`
  font-size: 0.8rem;
  color: #999;
  font-weight: 500;
`

