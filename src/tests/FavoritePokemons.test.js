import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../components';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testes do componente FavoritePokemons.js ', () => {
  it('Verifica se é exibido na tela a mensagem No favorite pokemon found.', () => {
    renderWithRouter(<FavoritePokemons />);

    const notFoundPokemon = screen.getByText(/No favorite pokemon found/i);
    expect(notFoundPokemon).toBeInTheDocument();
  });
});
