import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import { Form } from './Form'

describe('Form', () => {
  jest.useFakeTimers()

  test('Quando o input estiver vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByRole('button', { name: 'Adicionar' })

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test('Quando o input estiver preenchido, novos participantes podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByRole('button', { name: 'Adicionar' })

    fireEvent.change(input, { target: { value: 'Caio Gomes' } })
    fireEvent.click(button)

    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })

  test('Nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByRole('button', { name: 'Adicionar' })

    fireEvent.change(input, { target: { value: 'Caio Gomes' } })
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: 'Caio Gomes' } })
    fireEvent.click(button)

    const errorMessage = screen.getByRole('alert')

    expect(errorMessage.textContent).toBe('Nome já existe na lista!')
  })

  test('A mensagem de erro deve sumir após X segundos', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByRole('button', { name: 'Adicionar' })

    fireEvent.change(input, { target: { value: 'Caio Gomes' } })
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: 'Caio Gomes' } })
    fireEvent.click(button)

    let errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeNull()
  })
})
