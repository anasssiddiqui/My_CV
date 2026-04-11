function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>Work Experiences</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
          </div>
        </div>
        <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          {[["UI/UX Designer", "2002-2006", "Adobe Inc."], ["Web Design", "2007-2010", "Google Inc."], ["Web Development", "2010-2013", "Adobe Inc."]].map(([title, year, company]) => (
            <div className="col-lg-4 col-sm-6" key={title}>
              <div className="icon_box icon_box_style_2"><div className="icon_box_content"><h4>{title}</h4><p><span className="text_default">{year}</span> {company}</p><hr /><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
