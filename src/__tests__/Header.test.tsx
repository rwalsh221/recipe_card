import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router';

describe('Header.tsx', () => {
  test('heading should be displayed', () => {
    render(<Header />);

    const h1 = screen.getByRole('heading', {
      level: 1,
      name: /create a recipe card/i,
    });

    expect(h1).toBeInTheDocument();
  });
});
