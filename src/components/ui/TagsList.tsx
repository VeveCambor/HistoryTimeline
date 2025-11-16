import styled from 'styled-components'
import { ReactNode } from 'react'
import Tag from './Tag'

interface TagsListProps {
  tags: string[]
}

function TagsList({ tags }: TagsListProps) {
  return (
    <TagsListContainer>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </TagsListContainer>
  )
}

export default TagsList

// Styled Components
const TagsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

