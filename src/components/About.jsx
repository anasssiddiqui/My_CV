function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about_img animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <img src="assets/images/about_img.png" alt="about_img" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="about_info animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <div className="heading_s1 mb-3"><h2>About Me</h2></div>
              <p>Backend Engineer with 5+ years of experience building scalable Node.js microservices. Skilled in distributed systems, AWS, and AI integrations, delivering high-performance solutions, optimizing APIs, and supporting millions of users</p>
              <p>Results-driven software engineer specializing in backend development, scalable architectures, and performance optimization, with expertise in cloud technologies, APIs, and efficient data processing systems.</p>
              <hr />
              <div className="heading_s1 mb-4"><h5>Basic Info</h5></div>
              <ul className="profile_info list_none">
                <li><span className="title">Date of birth:</span><p>15 July 1998</p></li>
                <li><span className="title">Phone No:</span><p>+ (91) 8816-9548-63</p></li>
                <li><span className="title">Email:</span><a href="mailto:info@sitename.com">anassiddiqui544@gmail.com</a></li>
                <li><span className="title">Address:</span><p>#85 Gandhi nagar colony</p></li>
                <li><span className="title">Website:</span><p>www.mywebsite.com</p></li>
                <li><span className="title">Freelance:</span><p>Available</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
