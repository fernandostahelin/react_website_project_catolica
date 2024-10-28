import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Balneário Barra do Sul</h3>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>Email: contato@barradosul.sc.gov.br</p>
          <p>feito por Fernando Stahelin</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Balneário Barra do Sul. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
