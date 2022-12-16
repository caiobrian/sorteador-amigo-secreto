import { atom } from 'recoil'
import { Participant } from '../types'

export const participantsListState = atom<Participant[]>({
  key: 'participants',
  default: []
})
