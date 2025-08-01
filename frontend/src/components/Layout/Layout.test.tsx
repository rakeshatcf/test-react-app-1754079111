import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders navigation and footer', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(<Layout><div data-testid="child">Child Content</div></Layout>);
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});