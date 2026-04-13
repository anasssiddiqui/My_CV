const portfolioItems = [
  {
    classes: "software Engineer",
    image: "portfolio_item_small1.png",
    popupImages: ["portfolio_item1.jpg"],
    title: "Devnagri AI",
    category: "AI Translation",
    link: "https://devnagri.com/"
  },
  {
    classes: "brands web-design development",
    image: "portfolio_item_small2.svg",
    popupImages: ["portfolio_item2.jpg"],
    title: "courier company",
    category: "courier services",
    link: "https://www.courial.com/"
  },
  {
    classes: "Quoting & Sales Automation Solution",
    image: "osmoslogo.png",
    popupImages: ["portfolio_item2.jpg"],
    title: "Quoting & Sales Automation Solution",
    category: "Management",
    link: "https://www.osmoscloud.com/"
  },
  {
    classes: "brands development",
    image: "gabitLogo.svg",
    popupImages: ["portfolio_item5.jpg"],
    title: "Gabit: Your Longevity Platform",
    category: "Fitness",
    link: "https://www.gabit.com/"
  },
  {
    classes: "brands web-design development",
    image: "b1-wellness-optimization.png",
    popupImages: ["portfolio_item6.jpg"],
    title: "Fitness, nutrition, and cognitive behavioral therapy",
    category: "Fitness",
    link: "https://bodyf1rst.com/"
  },
  {
    classes: "brands web-design development",
    image: "New_logo_Assal.png",
    popupImages: ["portfolio_item7.jpg"],
    title: "Restaurant POS Software",
    category: "Advance Resturant POV",
    link: "https://www.intouchpos.com/"
  },
];

import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">Trusted Tools & Integrations</h2>
          <p className="portfolio-subtitle">
            Delivering robust platforms with modern frameworks, seamless integrations, 
            and resilient operations for high-demand environments
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <a 
              href={item.link} 
              className="portfolio-item"
              key={item.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-card">
                <div className="logo-container">
                  <img 
                    src={`assets/images/${item.image}`} 
                    alt={item.title}
                    className="logo-image"
                  />
                </div>
                <div className="item-info">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-category">{item.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
