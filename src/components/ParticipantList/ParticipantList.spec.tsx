import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useParticipantList } from 'state/participants/hooks/useParticipantList'
import { ParticipantList } from './ParticipantList'

jest.mock('state/participants/hooks/useParticipantList')

const mockedUseParticipantList = useParticipantList as jest.Mock

describe('ParticipantList', () => {
  beforeEach(() => {
    mockedUseParticipantList.mockReturnValue([])
  })

  test('Deve renderizar uma lista vazia de participantes', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')

    expect(itens).toHaveLength(0)
  })

  test('Deve renderizar uma lista preenchida de participantes', () => {
    const participants = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' }
    ]

    mockedUseParticipantList.mockReturnValue(participants)

    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')

    expect(itens).toHaveLength(participants.length)
  })
})
