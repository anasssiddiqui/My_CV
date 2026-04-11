const socialLinks = [
  ["sc_facebook", "ion-social-facebook"],
  ["sc_twitter", "ion-social-twitter"],
  ["sc_google", "ion-social-googleplus"],
  ["sc_youtube", "ion-social-youtube-outline"],
  ["sc_instagram", "ion-social-instagram-outline"],
];

function Footer() {
  return (
    <footer className="bg_gray">
      <div className="top_footer">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="footer_logo"><a href="index.html"><img alt="logo" src="assets/images/logo_dark.png" /></a></div>
              <h6 className="widget_title pt-3">Subscribe Our Newsletter</h6>
              <div className="newsletter_form newslattter_small">
                <form>
                  <div className="outline_input-black"><input type="text" required placeholder="Enter Email Address" /></div>
                  <button type="submit" title="Subscribe" className="btn btn-default rounded-0 btn-aylen" name="submit" value="Submit">subscribe</button>
                </form>
              </div>
              <ul className="list_none social_icons pt-4">
                {socialLinks.map(([cls, icon]) => (
                  <li key={cls}><a href="#" className={cls}><i className={icon} /></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container"><div className="row"><div className="col-12"><div className="bottom_footer border-top"><div className="row"><div className="col-12"><p className="copyright m-0 text-center">© 2019 All Rights Reserved By <a href="#" className="text_default">Bestwebcreator</a></p></div></div></div></div></div></div>
    </footer>
  );
}

export default Footer;
