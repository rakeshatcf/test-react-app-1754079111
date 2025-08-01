import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <nav>
          <h1>Modern React SPA</h1>
        </nav>
      </header>
      <main className="layout-main">
        {children || <Outlet />}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2024 Modern React SPA</p>
      </footer>
    </div>
  );
};

export default Layout;
