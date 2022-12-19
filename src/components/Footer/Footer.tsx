import { useNavigate } from 'react-router-dom'
import { useParticipantList } from 'state/participants/hooks/useParticipantList'

const MIN_PARTICIPANTS = 3

export const Footer = () => {
  const participants = useParticipantList()
  console.log('🚀 ~ file: Footer.tsx:8 ~ Footer ~ participants', participants)
  const navigate = useNavigate()

  function handleStart() {
    navigate('/sorteio')
  }

  return (
    <footer>
      <button
        onClick={handleStart}
        disabled={participants?.length < MIN_PARTICIPANTS}
      >
        Iniciar sorteio
      </button>
    </footer>
  )
}
