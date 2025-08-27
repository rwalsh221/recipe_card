import { render, screen } from '@testing-library/react';
import App from '../app/App';
// import { describe, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router';
// import { describe, it, vi } from 'vitest';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('App.tsx', () => {
  it('renders the app component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    screen.debug();
  });
});
