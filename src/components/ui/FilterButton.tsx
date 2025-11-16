import styled from 'styled-components'

interface FilterButtonProps {
  children: string
  active: boolean
  color: string
  onClick: () => void
}

function FilterButton({ children, active, color, onClick }: FilterButtonProps) {
  return (
    <StyledFilterButton
      $active={active}
      $color={color}
      onClick={onClick}
    >
      {children}
    </StyledFilterButton>
  )
}

export default FilterButton

// Styled Components
const StyledFilterButton = styled.button<{ $active: boolean; $color: string }>`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.$active ? props.$color : '#e0e0e0'};
  border-radius: 20px;
  background: ${props => props.$active ? props.$color : 'white'};
  color: ${props => props.$active ? 'white' : '#666'};
  font-size: 0.9rem;
  font-weight: ${props => props.$active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: ${props => props.$color};
    background: ${props => props.$active ? props.$color : `${props.$color}15`};
    color: ${props => props.$active ? 'white' : props.$color};
    transform: translateY(-1px);
  }
`

