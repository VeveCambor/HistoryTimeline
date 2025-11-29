import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  questions: QuizQuestion[]
  color?: string
  onComplete?: (score: number, total: number) => void
}

function Quiz({ questions, color, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer

  useEffect(() => {
    // Resetovat při změně otázek
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
    setIsComplete(false)
  }, [questions])

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestionIndex] = true
    setAnsweredQuestions(newAnswered)

    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsComplete(true)
      if (onComplete) {
        onComplete(score + (isCorrect ? 1 : 0), questions.length)
      }
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
    setIsComplete(false)
  }

  if (questions.length === 0) {
    return null
  }

  if (isComplete) {
    const finalScore = score
    const percentage = Math.round((finalScore / questions.length) * 100)
    
    return (
      <QuizContainer $color={color}>
        <QuizHeader>
          <QuizIcon>🎯</QuizIcon>
          <QuizTitle>Kvíz dokončen!</QuizTitle>
        </QuizHeader>
        <ResultContainer>
          <ScoreCircle $color={color} $percentage={percentage}>
            <ScoreNumber>{finalScore}</ScoreNumber>
            <ScoreTotal>/{questions.length}</ScoreTotal>
          </ScoreCircle>
          <ScoreText>
            {percentage >= 80 && 'Výborně! 🎉'}
            {percentage >= 60 && percentage < 80 && 'Dobře! 👍'}
            {percentage < 60 && 'Zkus to znovu! 💪'}
          </ScoreText>
          <PercentageText $color={color}>{percentage}%</PercentageText>
        </ResultContainer>
        <QuizButton onClick={handleRestart} $color={color}>
          Zkusit znovu
        </QuizButton>
      </QuizContainer>
    )
  }

  return (
    <QuizContainer $color={color}>
      <QuizHeader>
        <QuizIcon>❓</QuizIcon>
        <QuizTitle>Kvíz</QuizTitle>
        <ProgressBar>
          <ProgressFill 
            $color={color}
            $progress={((currentQuestionIndex + 1) / questions.length) * 100}
          />
        </ProgressBar>
        <ProgressText>
          Otázka {currentQuestionIndex + 1} z {questions.length}
        </ProgressText>
      </QuizHeader>

      <QuestionContainer>
        <QuestionText>{currentQuestion.question}</QuestionText>
        
        <OptionsContainer>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrectOption = index === currentQuestion.correctAnswer
            const showCorrect = showResult && isCorrectOption
            const showIncorrect = showResult && isSelected && !isCorrectOption

            return (
              <OptionButton
                key={index}
                $color={color}
                $selected={isSelected}
                $correct={showCorrect}
                $incorrect={showIncorrect}
                $disabled={showResult}
                onClick={() => handleAnswerSelect(index)}
              >
                <OptionLetter $color={color} $selected={isSelected} $correct={showCorrect} $incorrect={showIncorrect}>
                  {String.fromCharCode(65 + index)}
                </OptionLetter>
                <OptionText>{option}</OptionText>
                {showCorrect && <CheckIcon>✓</CheckIcon>}
                {showIncorrect && <CrossIcon>✗</CrossIcon>}
              </OptionButton>
            )
          })}
        </OptionsContainer>

        {showResult && currentQuestion.explanation && (
          <ExplanationBox $color={color}>
            <ExplanationTitle>💡 Vysvětlení:</ExplanationTitle>
            <ExplanationText>{currentQuestion.explanation}</ExplanationText>
          </ExplanationBox>
        )}

        <ActionButtons>
          {!showResult ? (
            <QuizButton
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              $color={color}
            >
              Odeslat odpověď
            </QuizButton>
          ) : (
            <QuizButton
              onClick={handleNext}
              $color={color}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Další otázka' : 'Zobrazit výsledek'}
            </QuizButton>
          )}
        </ActionButtons>
      </QuestionContainer>
    </QuizContainer>
  )
}

export default Quiz

// Styled Components
const QuizContainer = styled.div<{ $color?: string }>`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.$color ? `${props.$color}30` : '#e0e0e0'};
`

const QuizHeader = styled.div`
  margin-bottom: 2rem;
`

const QuizIcon = styled.span`
  font-size: 2.5rem;
  display: block;
  text-align: center;
  margin-bottom: 0.5rem;
`

const QuizTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`

const ProgressFill = styled.div<{ $color?: string; $progress: number }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background: ${props => props.$color || '#FF8C00'};
  border-radius: 4px;
  transition: width 0.3s ease;
`

const ProgressText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const QuestionText = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  line-height: 1.5;
  text-align: center;
  padding: 1rem;
  background: ${props => props.theme?.background || '#f9f9f9'};
  border-radius: 12px;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const OptionButton = styled.button<{ 
  $color?: string; 
  $selected?: boolean; 
  $correct?: boolean; 
  $incorrect?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border: 2px solid ${props => {
    if (props.$correct) return '#4CAF50'
    if (props.$incorrect) return '#f44336'
    if (props.$selected) return props.$color || '#FF8C00'
    return '#e0e0e0'
  }};
  border-radius: 12px;
  background: ${props => {
    if (props.$correct) return '#E8F5E9'
    if (props.$incorrect) return '#FFEBEE'
    if (props.$selected) return props.$color ? `${props.$color}15` : '#fff5e6'
    return 'white'
  }};
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  transition: all 0.2s;
  text-align: left;
  font-size: 1rem;

  &:hover {
    ${props => !props.$disabled && `
      transform: translateY(-2px);
      box-shadow: 0 4px 12px ${props.$color ? `${props.$color}30` : 'rgba(255, 140, 0, 0.2)'};
      border-color: ${props.$color || '#FF8C00'};
    `}
  }

  &:active {
    ${props => !props.$disabled && 'transform: translateY(0);'}
  }
`

const OptionLetter = styled.span<{ 
  $color?: string; 
  $selected?: boolean; 
  $correct?: boolean; 
  $incorrect?: boolean;
}>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.1rem;
  background: ${props => {
    if (props.$correct) return '#4CAF50'
    if (props.$incorrect) return '#f44336'
    if (props.$selected) return props.$color || '#FF8C00'
    return '#e0e0e0'
  }};
  color: white;
  flex-shrink: 0;
`

const OptionText = styled.span`
  flex: 1;
  color: #333;
`

const CheckIcon = styled.span`
  color: #4CAF50;
  font-size: 1.5rem;
  font-weight: bold;
`

const CrossIcon = styled.span`
  color: #f44336;
  font-size: 1.5rem;
  font-weight: bold;
`

const ExplanationBox = styled.div<{ $color?: string }>`
  padding: 1rem 1.5rem;
  background: ${props => props.$color ? `${props.$color}10` : '#fff5e6'};
  border-left: 4px solid ${props => props.$color || '#FF8C00'};
  border-radius: 8px;
  margin-top: 0.5rem;
`

const ExplanationTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`

const ExplanationText = styled.div`
  color: #666;
  line-height: 1.6;
`

const ActionButtons = styled.div`
  margin-top: 1rem;
`

const QuizButton = styled.button<{ $color?: string }>`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${props => props.$color || '#FF8C00'};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px ${props => props.$color ? `${props.$color}40` : 'rgba(255, 140, 0, 0.3)'};

  &:hover:not(:disabled) {
    background: ${props => {
      if (!props.$color) return '#e67300'
      // Ztmavit barvu o 10%
      const hex = props.$color.replace('#', '')
      const r = parseInt(hex.substr(0, 2), 16)
      const g = parseInt(hex.substr(2, 2), 16)
      const b = parseInt(hex.substr(4, 2), 16)
      const darkerR = Math.max(0, r - 25)
      const darkerG = Math.max(0, g - 25)
      const darkerB = Math.max(0, b - 25)
      return `rgb(${darkerR}, ${darkerG}, ${darkerB})`
    }};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.$color ? `${props.$color}60` : 'rgba(255, 140, 0, 0.4)'};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #ccc;
    box-shadow: none;
  }
`

const ResultContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`

const ScoreCircle = styled.div<{ $color?: string; $percentage: number }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: conic-gradient(
    ${props => props.$color || '#FF8C00'} 0deg ${props => props.$percentage * 3.6}deg,
    #e0e0e0 ${props => props.$percentage * 3.6}deg 360deg
  );
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: white;
  }
`

const ScoreNumber = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: #333;
  position: relative;
  z-index: 1;
  line-height: 1;
`

const ScoreTotal = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #666;
  position: relative;
  z-index: 1;
  line-height: 1;
`

const ScoreText = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`

const PercentageText = styled.div<{ $color?: string }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.$color || '#FF8C00'};
`

