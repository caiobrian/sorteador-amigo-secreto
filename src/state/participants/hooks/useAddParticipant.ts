import { useRecoilValue, useSetRecoilState } from 'recoil'

import { Participant } from '../types'
import { participantsListState } from '../atoms/participantsAtom'
import { errorMessageState } from '../atoms/errorMessageAtom'

export const useAddParticipant = () => {
  const setParticipantsList = useSetRecoilState(participantsListState)
  const setErrorMessage = useSetRecoilState(errorMessageState)

  const list = useRecoilValue(participantsListState)

  return (participant: Participant) => {
    if (list.find((p) => p.name === participant.name)) {
      setErrorMessage('Nome já existe na lista!')
      setTimeout(() => setErrorMessage(''), 3000)
      return
    }

    setParticipantsList((participants) => [...participants, participant])
  }
}
