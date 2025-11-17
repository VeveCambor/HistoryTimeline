import styled from 'styled-components'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchInput({ value, onChange, placeholder = 'Vyhledat události...' }: SearchInputProps) {
  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <ClearButton onClick={() => onChange('')} title="Vymazat">
          ✕
        </ClearButton>
      )}
    </SearchContainer>
  )
}

export default SearchInput

// Styled Components
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
`

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  font-size: 1.2rem;
  z-index: 1;
  pointer-events: none;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #999;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`

