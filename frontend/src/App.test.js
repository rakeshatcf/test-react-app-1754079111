import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home Page/i);
  expect(homeElement).toBeInTheDocument();
});