import { useRecoilState } from 'recoil'
import { errorMessageState } from '../atoms/errorMessageAtom'

export const useErrorMessage = () => {
  const message = useRecoilState(errorMessageState)

  return message[0]
}
