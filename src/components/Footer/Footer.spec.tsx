import { act, fireEvent, render, screen } from '@testing-library/react'
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil'
import { renderHook } from '@testing-library/react-hooks'
import { useParticipantList } from 'state/participants/hooks/useParticipantList'
import { BrowserRouter } from 'react-router-dom'

import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import { useAddParticipant } from 'state/participants/hooks/useAddParticipant'
import { Participant } from 'state/participants/types'
import { participantsListState } from 'state/participants/atoms/participantsAtom'

describe('Footer', () => {
  test('o sorteio não pode ser iniciado se não houver participantes suficientes', () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      </BrowserRouter>
    )

    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })

  test('o sorteio pode ser iniciado se houver participantes suficientes', () => {
    const { result } = renderHook(() => useRecoilState(participantsListState), {
      wrapper: RecoilRoot
    })

    act(() => {
      result.current[1]([
        { name: 'João', id: 1 },
        { name: 'Maria', id: 2 },
        { name: 'José', id: 3 }
      ])
    })

    const { getByRole } = render(
      <BrowserRouter>
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      </BrowserRouter>
    )

    const button = getByRole('button')
    expect(button).toBeEnabled()
  })
})
