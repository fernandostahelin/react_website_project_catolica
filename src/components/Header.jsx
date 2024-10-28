import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img 
          src={process.env.PUBLIC_URL + '/balneario-barra-do-sul.png'} 
          alt="Balneário Barra do Sul"
        />
        <h1>Balneário Barra do Sul</h1>
      </div>
    </header>
  );
}

export default Header;
