import React from 'react';
import './TestimonialsSection.css';

function TestimonialsSection() {
  // Array de depoimentos para facilitar manutenção e escalabilidade
  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "O site criado pela G<dev> aumentou nossas conversões logo no primeiro mês! O ROI foi impressionante.",
      name: "Maria Silva",
      position: "Sócia",
      company: "DivMark",
      industry: "Marketing Digital"
    },
    {
      id: 2,
      stars: 5,
      text: "Site impecável! Superou nossas expectativas e transmitiu com clareza a ideia que tínhamos sobre o escritório.",
      name: "João Carneiro",
      position: "Sócio Fundador",
      company: "CR Assessoriaa jurídica",
      industry: "Jurídico"
    },
    {
      id: 3,
      stars: 5,
      text: "Processo ágil e resultado excepcional! A landing page foi entregue antes do prazo e tornou nossos pedidos muito mais fáceis.",
      name: "Ana Costa",
      position: "Fundadora",
      company: "Tradição Doces",      
      industry: "Loja de Doces"
    }
  ];

  // Função para renderizar as estrelas
  const renderStars = (count) => {
    return "★".repeat(count);
  };

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Resultados Comprovados por Nossos Clientes</h2>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="stars" aria-label={`${testimonial.stars} de 5 estrelas`}>
                {renderStars(testimonial.stars)}
              </div>
              <blockquote>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <footer className="client-info">
                  <cite className="client-name">{testimonial.name}</cite>
                  <div className="client-position">
                    {testimonial.position} na {testimonial.company}
                    <span className="client-industry">• {testimonial.industry}</span>
                  </div>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
        
        </div>

        <div className="testimonials-cta">
          <p>Junte-se a mais de 20 empresas que transformaram seus resultados online</p>
          <a href="#contato" className="testimonials-button">Quero resultados assim</a>
          
        </div>
    </section>
  );
}

export default TestimonialsSection;