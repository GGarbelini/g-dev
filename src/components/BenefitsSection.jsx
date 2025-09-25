import React from 'react';
import './BenefitsSection.css';

function BenefitsSection() {
  // Array de benefícios para facilitar manutenção e escalabilidade
  const benefits = [
    {
      id: 1,
      icon: "🚀",
      title: "Design Responsivo",
      description: "Landing pages otimizadas para todos os dispositivos, garantindo experiência perfeita em smartphones, tablets e desktops."
    },
    {
      id: 2,
      icon: "📈",
      title: "Alta Taxa de Conversão",
      description: "Estratégias comprovadas de UX/UI e copywriting que aumentam significativamente suas vendas e leads."
    },
    {
      id: 3,
      icon: "⏱️",
      title: "Entrega Rápida",
      description: "Seu projeto pronto em tempo recorde, com processo otimizado e comunicação eficiente em todas as etapas."
    }
  ];

  return (
    <section id="beneficios" className="benefits-section">
      <div className="container">
        <h2 className="section-title">Por Que Escolher Nossas Landing Pages?</h2>
        
        <div className="benefits-grid">
          {benefits.map(benefit => (
            <article key={benefit.id} className="benefit-card">
              <div className="benefit-icon" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
               
      </div>
       <div className="benefits-cta">
          <p className="benefits-tagline">Transforme visitantes em clientes com landing pages otimizadas para resultados</p>
          <a href="#contato" className="benefits-button">Solicitar Proposta</a>
        </div>
    </section>
  );
}

export default BenefitsSection;