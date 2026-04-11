const testimonials = [
  ["client_img1.jpg", "Lissa Castro", "Developer"],
  ["client_img2.jpg", "Alden Smith", "Creative Designer"],
  ["client_img3.jpg", "Daisy Lana", "Creative Director"],
  ["client_img4.jpg", "Helena Amos", "Creative Designer"],
];

function Testimonial() {
  return (
    <section className="bg_gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>Clients Testimonials</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
            <div className="cleafix small_divider" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="carousel_slider testimonial_style1 owl-carousel owl-theme" data-margin="20" data-dots="false" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "1199":{"items": "3"}}'>
              {testimonials.map(([img, name, role]) => (
                <div className="item" key={name}>
                  <div className="testimonial_box">
                    <div className="testimonial_user"><div className="testimonial_img"><img src={`assets/images/${img}`} alt="client" /></div><div className="client_info"><h6>{name}</h6><span>{role}</span></div></div>
                    <div className="testi_meta"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto explicabo.</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
