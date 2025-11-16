import { useNavigate } from 'react-router-dom'
import Button from './Button'

interface BackButtonProps {
  to?: string
  label?: string
}

function BackButton({ to, label = '← Zpět' }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) {
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

