import { useRecoilValue } from 'recoil'
import { participantsListState } from '../atoms/participantsAtom'

export const useParticipantList = () => {
  return useRecoilValue(participantsListState)
}
