import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente App.js ', () => {
  it('Verifica se os Links estão corretos', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(linkHome);
    expect(history.location.pathname).toEqual('/');

    const linkAbout = screen.getByRole('link', { name: 'About' });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toEqual('/about');

    const linkFavoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(linkFavoritePokemons);
    expect(history.location.pathname).toEqual('/favorites');
  });
});
