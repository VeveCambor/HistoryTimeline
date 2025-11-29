import { ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  color?: string
}

function Modal({ isOpen, onClose, title, children, color }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} $color={color}>
        <ModalHeader $color={color}>
          {title && <ModalTitle>{title}</ModalTitle>}
          <CloseButton onClick={onClose} $color={color}>
            ✕
          </CloseButton>
        </ModalHeader>
        <ModalBody $color={color}>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalContent = styled.div<{ $color?: string }>`
  background: white;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  border: 2px solid ${props => props.$color ? `${props.$color}30` : '#e0e0e0'};
  overflow: hidden;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

// Pomocná funkce pro převod hex barvy na RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

const ModalHeader = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 2px solid ${props => props.$color ? `${props.$color}20` : '#e0e0e0'};
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
`

const CloseButton = styled.button<{ $color?: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$color ? `${props.$color}15` : '#f0f0f0'};
  color: ${props => props.$color || '#666'};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.$color || '#FF8C00'};
    color: white;
    transform: rotate(90deg);
  }
`

const ModalBody = styled.div<{ $color?: string }>`
  padding: 1.5rem;
  padding-right: 0.75rem;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  margin-right: 0.5rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.$color ? props.$color : '#FF8C00'};
    border-radius: 3px;
    transition: background 0.2s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => {
      if (props.$color) {
        const colorRgb = hexToRgb(props.$color)
        if (colorRgb) {
          const darkerR = Math.max(0, colorRgb.r - 20)
          const darkerG = Math.max(0, colorRgb.g - 20)
          const darkerB = Math.max(0, colorRgb.b - 20)
          return `rgb(${darkerR}, ${darkerG}, ${darkerB})`
        }
      }
      return '#e67300'
    }};
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: ${props => props.$color ? `${props.$color} transparent` : '#FF8C00 transparent'};
`

