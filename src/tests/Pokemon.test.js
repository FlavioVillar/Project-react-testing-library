import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe.only('Testes do componente Pokemon.js ', () => {
  it('Verifica se a imagem do Pokémon é exibida', () => {
    renderWithRouter(<App />);
    const imgPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPokemon.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    // screen.logTestingPlaygroundURL()
  });

  it('Verifica se o tipo correto do pokémon é mostrado na tela. ', () => {
    renderWithRouter(<App />);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent('Electric');
  });

  it('Verifica se o card contém um link de navegação para detalhes do Pokémon.', () => {
    const { history } = renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    expect(history.location.pathname).toEqual('/pokemons/25');
  });

  it('Verifica se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const checked = screen.getByRole('checkbox');
    userEvent.click(checked);
    const nameFavorited = screen.getByRole(
      'img', { name: /pikachu is marked as favorite/i },
    );
    expect(nameFavorited).toBeInTheDocument();
    const imgStar = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(imgStar.src).toContain('/star-icon.svg');
  });
});
