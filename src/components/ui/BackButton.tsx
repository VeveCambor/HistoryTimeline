import { useNavigate } from 'react-router-dom'
import Button from './Button'

interface BackButtonProps {
  to?: string
  label?: string
  onClick?: () => void
}

function BackButton({ to, label = '← Zpět', onClick }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      navigate(to)
    } else {
      navigate(-1)
    }
  }

  return (
    <Button onClick={handleClick} variant="secondary">
      {label}
    </Button>
  )
}

export default BackButton

