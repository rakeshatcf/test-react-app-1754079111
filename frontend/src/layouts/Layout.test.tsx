import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders children content', () => {
    render(
      <Layout>
        <div data-testid="child-content">Test Content</div>
      </Layout>
    );
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });

  test('includes navigation and footer', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});