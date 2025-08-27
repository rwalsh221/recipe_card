import { render, screen } from '@testing-library/react';
import Index from '../app/pages/Index/Index';
import { BrowserRouter } from 'react-router';

describe('Index.tsx', () => {
  test('heading is rendered', () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /create a recipe card/i })
    ).toBeInTheDocument();
  });
});
