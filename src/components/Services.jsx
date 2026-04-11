const services = [
  ["ti-image", "Graphic Design"],
  ["ti-video-camera", "Digital Marketing"],
  ["ti-crown", "Branding"],
  ["ti-light-bulb", "Development"],
  ["ti-mobile", "Mobile Application"],
  ["ti-camera", "Photography"],
];

function Services() {
  return (
    <section id="services" className="bg_gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation text-center" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>Awesome Services</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
          </div>
        </div>
        <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          {services.map(([icon, title]) => (
            <div className="col-lg-4 col-sm-6 text-center" key={title}>
              <div className="icon_box icon_box_style_1">
                <div className="box_icon mb-3"><i className={icon} /></div>
                <div className="icon_box_content">
                  <h5>{title}</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
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
