import { atom } from 'recoil'

export const errorMessageState = atom<string>({
  key: 'errorState',
  default: ''
})
