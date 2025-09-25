import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="G<dev> Logo" />
                        <p>Criamos landing pages que convertem visitantes em clientes.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#inicio">Início</a></li>
                            <li><a href="#beneficios">Benefícios</a></li>
                            <li><a href="#depoimentos">Depoimentos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contato</h4>
                        <p>Email: garbelinidev@gmail.com</p>
                        <p>Telefone: +351 924785438</p>
                        
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2023 G&lt;dev&gt;. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;