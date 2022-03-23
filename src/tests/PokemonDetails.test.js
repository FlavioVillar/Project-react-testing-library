import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe.only('Testes do componente PokemonDetails.js ', () => {
  it('Verifica se a página Details contem <name.Pokemon> Details. ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const nameDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(nameDetails).toBeInTheDocument();
  });

  it('Verifica se details contem um heading Summary e um resumo do Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/4');

    const sumary = screen.getByRole('heading', { name: /summary/i });
    expect(sumary).toBeInTheDocument();

    const textSumary = screen.getByText(/The flame on its tail shows the strength/i);
    expect(textSumary).toBeInTheDocument();
  });

  it('Verifica se Details contem um heading com texto Game Locations of <name>.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/10');

    const locationOfName = screen.getByRole(
      'heading', { name: /game locations of caterpie/i },
    );
    expect(locationOfName).toBeInTheDocument();
  });

  it('Verifica se são exibidos, o nome da localização e uma imagem do mapa.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/23');

    const imgLocationOne = screen.queryAllByRole('img', { name: /Ekans location/i });
    expect(imgLocationOne[0].src).toContain('https://cdn2.bulbagarden.net/upload/e/ec/Johto_Goldenrod_City_Map.png');
  });

  it('Verifica se o label do checkbox deve conter o texto Pokémon favoritado?.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/65');
    const favotited = screen.getByText(/pokémon favoritado\?/i);
    expect(favotited).toBeInTheDocument();
  });
});
