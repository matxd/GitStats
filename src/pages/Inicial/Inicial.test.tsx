import { render, screen } from '@testing-library/react';

import { Inicial } from './Inicial';

describe('verifica se elementos da página inicial existem', () => {
  test('deve conter o titulo Gitstats na página', () => {
    render(<Inicial />)
  
    const titulo = screen.getByText('Gitstats')
    expect(titulo).toBeInTheDocument()
  })

  test('deve conter a descrição na página', () => {
    render(<Inicial />)
  
    const descricao = screen.getByText('Digite seu nome de usuário e veja informações sobre seu perfil')
    expect(descricao).toBeInTheDocument()
  })

  test('deve conter o input de username na página', () => {
    render(<Inicial />)
  
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
  })

  test('deve conter botão que redireciona para página de Profile', () => {
    render(<Inicial />)
  
    const botao = screen.getByRole('button')
    expect(botao).toBeInTheDocument()
  })
})