import React from 'react';
import './HeroSection.css';
import profileImage from '../assets/profile.png';

function HeroSection() {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp (substitua pelo seu)
    const whatsappNumber = '351924785438'; // Formato: código do país + DDD + número
    
    // Mensagem
    const message = 'Olá! Gostaria de solicitar um orçamento para uma landing page.';
    
    // URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    // Adicionar evento de analytics (você precisará implementar o Google Analytics)
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'whatsapp_cta'
      });
    }
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Landing Pages Profissionais que Aumentam suas Conversões</h1>
            <p>Design estratégico e otimizado que transforma visitantes em clientes fiéis para seu negócio crescer online</p>
            <ul className="hero-benefits">
              <li> Design responsivo para todos os dispositivos</li>
              <li> Otimizado para alta conversão</li>
              <li> Entrega rápida em até 7 dias</li>
            </ul>
            <button 
              className="cta-button" 
              onClick={handleWhatsAppClick}
              aria-label="Solicitar orçamento via WhatsApp"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>
          <div className="hero-image">
            <img 
              src={profileImage} 
              alt="Especialista em Landing Pages da G<dev> criando sites de alta conversão" 
              width="450" 
              height="450" 
              loading="eager" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;