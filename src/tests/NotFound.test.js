import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testes do componente NotFound.js ', () => {
  it('Verifica se página contém um heading h2 com o texto Page requested not found.',
    () => {
      renderWithRouter(<NotFound />);

      const headingNotFound = screen.getByRole(
        'heading', { name: 'Page requested not found Crying emoji', level: 2 },
      );
      expect(headingNotFound).toBeInTheDocument();
    });

  it('Verifica se a página contém imagem Pikachu crying', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByRole(
      'img', { name: 'Pikachu crying because the page requested was not found' },
    );
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  // visto em https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
  });
});
