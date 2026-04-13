const testimonials = [
  ["ankhil-Image.jpeg", "Akhil Mudgal", "Engineering Leader", "I had the opportunity to work with Anas Siddiqui and found him a capable, dependable Backend Engineer with strong Node.js expertise, building scalable systems, handling complex integrations, and supporting teams."],

  ["rishav.jpeg", "Rishav Devgan", "Engineering Leader", "A reliable and cooperative professional with strong skills in backend technologies, experienced in building efficient and dependable solutions, and working well with teams effectively collaboratively efficiently and consistently."],

  ["mohit.jpeg", "Mohit Kumar", "Engineering Leader", "I’ve worked with Anas and had a great collaboration experience. As a frontend engineer, I appreciated their smooth backend integration, clear communication, and system understanding. They’re dependable, proactive and reliable."],

  ["raghvendra.jpeg", "Raghvendra Pandey", "QA Engineer", "I’ve worked closely with Anas in testing and had a great experience. He writes clean code, considers edge cases, resolves issues quickly, welcomes feedback positively, and is a reliable, quality-focused software engineer."]
];

function Testimonial() {
  return (
    <section className="bg_gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>Client & Team Feedback</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Real insights from professionals I’ve collaborated with, reflecting reliability, technical expertise, and commitment to quality.</p>
            <div className="cleafix small_divider" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="carousel_slider testimonial_style1 owl-carousel owl-theme" data-margin="20" data-dots="false" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "1199":{"items": "3"}}'>
              {testimonials.map(([img, name, role, summary]) => (
                <div className="item" key={name}>
                  <div className="testimonial_box">
                    <div className="testimonial_user"><div className="testimonial_img"><img src={`assets/images/${img}`} alt="client" /></div><div className="client_info"><h6>{name}</h6><span>{role}</span></div></div>
                    <div className="testi_meta"><p>{summary}.</p></div>
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
