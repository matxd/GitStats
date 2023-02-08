import { render, screen } from '@testing-library/react';

import NotFound from './NotFound'

describe('verifica se elementos da página de erro existem', () => {
  test('deve conter o titulo na página', () => {
    render(<NotFound />)
  
    const titulo = screen.getByText('Página não encontrada')
    expect(titulo).toBeInTheDocument()
  })
})