function Contact() {
  return (
    <section id="contact" className="small_pt">
      <div className="container">
        <div className="row"><div className="col-12"><div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>Contact Me</h2></div></div></div>
        <div className="row">
          <div className="col-md-6">
            <div className="field_form form_style3 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <form method="post" name="enq">
                <div className="row">
                  <div className="form-group col-12"><input required placeholder="Enter Name *" id="first-name" className="form-control" name="name" type="text" /></div>
                  <div className="form-group col-12"><input required placeholder="Enter Email *" id="email" className="form-control" name="email" type="email" /></div>
                  <div className="form-group col-12"><input placeholder="Enter Subject" id="subject" className="form-control" name="subject" type="text" /></div>
                  <div className="form-group col-lg-12"><textarea required placeholder="Message *" id="description" className="form-control" name="message" rows="5" /></div>
                  <div className="col-lg-12"><button disabled type="submit" title="Submit Your Message!" className="btn btn-default rounded-0 btn-aylen" id="submitButton" name="submit" value="Submit">Submit</button></div>
                  <div className="col-lg-12 text-center"><div id="alert-msg" className="alert-msg text-center" /></div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6"><div className="contact_map mt-4 mt-md-0 animation" data-animation="fadeInUp" data-animation-delay="0.03s"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193229.77301255226!2d-74.05531241936525!3d40.823236500441624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW+123rd+St%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1533565007513" allowFullScreen /></div></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
