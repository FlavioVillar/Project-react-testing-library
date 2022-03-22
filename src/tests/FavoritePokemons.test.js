import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../components';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testes do componente FavoritePokemons.js ', () => {
  it('Verifica se os Links estão corretos', () => {
    const { history } = renderWithRouter(<FavoritePokemons />);

    const notFoundPokemon = screen.getByText(/No favorite pokemon found/i);
    expect(notFoundPokemon).toBeInTheDocument();
  });
});
