const services = [
  ["ti-server", "Backend Development", "Build fast, scalable, and reliable Node.js applications for modern businesses."],
  ["ti-exchange-vertical", "API Development & Integration", "Create secure APIs and integrate third-party and AI services seamlessly."],
  ["ti-layout-grid2", "Microservices Architecture", "Design scalable systems that handle growth and high user traffic efficiently."],
  ["ti-dashboard", "Performance Optimization", "Boost application speed and reduce latency for better user experience."],
  ["ti-cloud", "Cloud & DevOps (AWS)", "Deploy, scale, and manage applications with reliable cloud infrastructure."],
  ["ti-light-bulb", "AI Integration", "Add intelligent features using AI APIs and prompt engineering."],
];

function Services() {
  return (
    <section id="services" className="bg_gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation text-center" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>Awesome Services</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Delivering scalable backend systems, high-performance APIs, and AI-powered solutions with reliable cloud infrastructure to help businesses grow faster and operate efficiently.</p>
          </div>
        </div>
        <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          {services.map(([icon, title, summary]) => (
            <div className="col-lg-4 col-sm-6 text-center" key={title}>
              <div className="icon_box icon_box_style_1">
                <div className="box_icon mb-3"><i className={icon} /></div>
                <div className="icon_box_content">
                  <h5>{title}</h5>
                  <p>{summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
