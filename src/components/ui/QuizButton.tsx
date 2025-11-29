import styled from 'styled-components'

interface QuizButtonProps {
  onClick: () => void
  color?: string
  hasQuestions: boolean
}

function QuizButton({ onClick, color, hasQuestions }: QuizButtonProps) {
  if (!hasQuestions) return null

  return (
    <FloatingButton onClick={onClick} $color={color} className="quiz-button">
      <QuestionIcon>?</QuestionIcon>
      <Tooltip $color={color}>Otestujte své znalosti</Tooltip>
    </FloatingButton>
  )
}

export default QuizButton

// Styled Components
const FloatingButton = styled.button<{ $color?: string }>`
  position: absolute !important;
  bottom: 1.5rem;
  right: 2rem;
  left: auto !important;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: ${props => props.$color ? `${props.$color}E6` : 'rgba(255, 140, 0, 0.9)'};
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  z-index: 10;
  animation: pulse 2s infinite;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    50% {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    bottom: 1rem;
    right: 1rem;
  }
`

const QuestionIcon = styled.span`
  display: block;
  line-height: 1;
`

const Tooltip = styled.span<{ $color?: string }>`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.$color || '#FF8C00'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  ${FloatingButton}:hover & {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: ${props => props.$color || '#FF8C00'};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

