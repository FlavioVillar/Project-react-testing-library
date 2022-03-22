import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testes do componente Pokedex.js ', () => {
  it('Verifica se a página contém um heading h2 com o texto Encountered pokémons. ',
    () => {
      renderWithRouter(<App />);
      const encontredPokemon = screen.getByRole('heading', {
        name: /encountered pokémons/i,
      });
      expect(encontredPokemon).toBeInTheDocument();
    });

  it('Verifica se existe um botão de filtragem para cada tipo de Pokémon.', () => {
    renderWithRouter(<App />);
    const btnTypePokemon = screen.getAllByTestId('pokemon-type-button');
    const seven = 7;
    expect(btnTypePokemon).toHaveLength(seven);
  });

  it('Verifica se o botão All está visível.', () => {
    renderWithRouter(<App />);
    const btnAllPokemon = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAllPokemon);
    expect(btnAllPokemon).toBeInTheDocument();
  });

  it('Verifica se o texto do botão corresponde ao nome do tipo de Pokemon.', () => {
    renderWithRouter(<App />);
    const test = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(test);
    const nameTest = screen.getByText(/alakazam/i);
    expect(nameTest).toBeInTheDocument();
  });
});
