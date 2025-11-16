import styled from 'styled-components'

interface TagProps {
  children: string
}

function Tag({ children }: TagProps) {
  return <TagContainer>{children}</TagContainer>
}

export default Tag

// Styled Components
const TagContainer = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`

