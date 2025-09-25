import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuActive, setMenuActive] = useState(false);
  
  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="G<dev> Logo" />
        </div>
        
        {/* Botão hamburger */}
        <button 
          className={`hamburger-menu ${menuActive ? 'open' : ''}`} 
          aria-expanded={menuActive} 
          aria-controls="nav-menu"
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="sr-only">Menu</span>
        </button>
        
        {/* Menu de navegação */}
        <nav id="nav-menu" className={`menu ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
            <li><a href="#beneficios" onClick={toggleMenu}>Benefícios</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfólio</a></li>
            <li><a href="#depoimentos" onClick={toggleMenu}>Depoimentos</a></li>
            <li><a href="#contato" className="contato-btn" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;