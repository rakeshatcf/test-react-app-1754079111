import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  const renderApp = () => render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  test('renders home page initially', () => {
    renderApp();
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  test('navigates to different routes', async () => {
    renderApp();
    const user = userEvent.setup();
    const aboutLink = screen.getByText(/About/i);
    await user.click(aboutLink);
    expect(await screen.findByText(/About Page/i)).toBeInTheDocument();
  });

  test('handles error boundaries', () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    renderApp();
    // Trigger error boundary
    expect(screen.getByRole('alert')).toBeInTheDocument();
    spy.mockRestore();
  });
});