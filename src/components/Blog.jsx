const posts = [
  ["blog_small_img1.jpg", "UI/UX Design", "Look Up At The Innovative Ways Team Work"],
  ["blog_small_img2.jpg", "Branding", "How To Create A Website For Your Business?"],
  ["blog_small_img3.jpg", "Developing", "How To Perfect You Get Free expensive Directories"],
];

function Blog() {
  return (
    <section id="blog" className="pb_20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>My Letest Blog</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
          </div>
        </div>
        <div className="row"><div className="col-12"><div className="clearfix small_divider" /></div></div>
        <div className="row justify-content-center animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          {posts.map(([img, category, title]) => (
            <div className="col-lg-4 col-md-6" key={title}>
              <div className="blog_post">
                <div className="blog_img"><a href="blog-detail-sidemenu-white.html"><img src={`assets/images/${img}`} alt={img} /></a></div>
                <div className="blog_content"><div className="blog_text"><div className="post_category"><a href="#">{category}</a></div><h5 className="blog_title"><a href="blog-detail-sidemenu-white.html">{title}</a></h5><ul className="list_none blog_meta"><li><a href="#"><i className="ion-calendar" />April 14, 2018</a></li><li><a href="#"><i className="ion-chatboxes" />2 Comment</a></li></ul><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text</p><a href="blog-detail-sidemenu-white.html" className="read_more">Read More</a></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
