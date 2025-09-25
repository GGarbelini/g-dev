import React from 'react';
import './PortfolioSection.css';
import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
import projeto4 from "../assets/projeto4.png";


function PortfolioSection() {
  // Array com os projetos do portfólio
  const portfolioProjects = [
    {
      id: 1,
      title: "Tradição Doces",
      category: "Doceria",
      image: projeto1, // Ajuste o caminho conforme sua estrutura
      description: "Página de vendas desenvolvida para conectar a empresa aos clientes e aumentar os pedidos via WhatsApp."
    },
    {
      id: 2,
      title: "DivMark",
      category: "Marketing Digital",
      image: projeto2, // Ajuste o caminho conforme sua estrutura
      description: "Landing page desenvolvida para uma agência de Marketing Digital, com foco em atrair e converter novos clientes."
    },
    {
      id: 3,
      title: "JC Assessoria Jurídica",
      category: "Advocacia",
      image: projeto3, // Ajuste o caminho conforme sua estrutura
      description: "Página institucional criada para fortalecer a presença digital do escritório de advocacia e gerar oportunidades de atendimento."
    },
    {
      id: 4,
      title: "Joyce Cordeiro",
      category: "Lifestyle",
      image: projeto4, // Ajuste o caminho conforme sua estrutura
      description: "Bio page desenvolvida para concentrar, em um só link, a divulgação dos produtos e serviços nas redes sociais."
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Projetos de Sucesso</h2>
        
        
        <div className="portfolio-grid">
          {portfolioProjects.map(project => (
            <article key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img 
                  src={project.image} 
                  alt={`Landing page para ${project.title}`} 
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        
        
      </div>

      <div className="portfolio-cta">
          <h3>Pronto para transformar sua presença online?</h3>
          <p>Sua landing page de alta conversão está a apenas um clique de distância</p>
          <a href="#contato" className="cta-button">Solicitar Orçamento</a>
        </div>
    </section>
  );
}

export default PortfolioSection;