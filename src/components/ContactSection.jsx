import React, { useState } from 'react';
import './ContactSection.css';
import profileImage from '../assets/profile.png';

function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Número de WhatsApp (substitua pelo seu)
    const whatsappNumber = '351924785438'; // Formato: código do país + DDD + número
    
    // Mensagem formatada
    const message = `Olá! Meu nome é ${formData.nome}. 
Email: ${formData.email}
Telefone: ${formData.telefone}
Gostaria de mais informações sobre seus serviços de ${formData.servico}.`;
    
    // URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="section-title">Pronto Para Transformar Seu Negócio?</h2>
            <p>Entre em contato hoje mesmo e comece a converter mais visitantes em clientes</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Nome" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Telefone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select 
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione o Serviço</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Páginas de Links Bio">Páginas de Links Bio</option>
                  <option value="Website Completo">Website Completo</option>
                  <option value="E-commerce">E-commerce</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">ENVIAR PELO WHATSAPP</button>
            </form>
          </div>
          
          <div className="contact-image">
            <img src={profileImage} alt="Profissional G<dev>" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
