import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp (substitua pelo seu)
    const whatsappNumber = '351924785438'; // Formato: código do país + DDD + número
    
    // Mensagem
    const message = 'Olá! Gostaria de mais informações sobre seus serviços de landing page.';
    
    // URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick} 
      className="whatsapp-button"
      aria-label="Contato via WhatsApp"
    >
      💬
    </button>
  );
}

export default WhatsAppButton;