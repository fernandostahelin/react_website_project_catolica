import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Balneário Barra do Sul
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">Sobre</Link>
          <Link to="/attractions" className="nav-link">Atrações</Link>
          <Link to="/contact" className="nav-link">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;