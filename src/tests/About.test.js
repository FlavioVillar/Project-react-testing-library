import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { About } from '../components';

describe.only('Testes do componente About.js ', () => {
  it('Verifica se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const headingPokedex = screen.getByRole('heading', {
      name: /About Pokédex/i,
    });
    expect(headingPokedex).toBeInTheDocument();
  });

  it('Verifica se a página contém imagem específica de uma Pokédex:', () => {
    renderWithRouter(<About />);

    const image = screen.getByRole('img', { name: 'Pokédex' });
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    // visto em https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
  });
});
