import React from 'react'
import { render, screen } from '@testing-library/react'

import { Header } from './Header'

describe('Header', () => {
  test('Deve testar o componente Header', () => {
    render(<Header />)

    const logo = screen.getByRole('img', { name: 'Logo do Sorteador' })
    const image = screen.getByAltText('Participante com um presente na mão')

    expect(logo).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
