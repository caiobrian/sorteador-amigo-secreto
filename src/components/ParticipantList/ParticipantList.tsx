import { useParticipantList } from 'state/participants/hooks/useParticipantList'

export const ParticipantList = () => {
  const participants = useParticipantList()

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant.id}>{participant.name}</li>
      ))}
    </ul>
  )
}
