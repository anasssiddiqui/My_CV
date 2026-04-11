const portfolioItems = [
  {
    classes: "web-design",
    image: "portfolio_item_small1.jpg",
    popupImages: ["portfolio_item1.jpg"],
    title: "Branded Products",
    category: "Web Design",
  },
  {
    classes: "brands web-design development",
    image: "portfolio_item_small2.jpg",
    popupImages: ["portfolio_item2.jpg"],
    title: "Visiting Card",
    category: "Branding, Web Design, Development",
  },
  {
    classes: "brands web-design",
    carousel: ["portfolio_item_small3.jpg", "portfolio_item_small4.jpg"],
    popupImages: ["portfolio_item3.jpg", "portfolio_item4.jpg"],
    title: "Coffee Cup Mockup",
    category: "Branding, Web Design",
  },
  {
    classes: "brands development",
    image: "portfolio_item_small5.jpg",
    popupImages: ["portfolio_item5.jpg"],
    title: "Letter Design",
    category: "Branding, Development",
  },
  {
    classes: "brands web-design development",
    image: "portfolio_item_small6.jpg",
    popupImages: ["portfolio_item6.jpg"],
    title: "Branding Cap",
    category: "Branding, Web Design, Development",
  },
  {
    classes: "brands web-design development",
    image: "portfolio_item_small7.jpg",
    popupImages: ["portfolio_item7.jpg"],
    title: "Branding Cream",
    category: "Banding, Web Design, Development",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="pb_70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s"><h2>My Portfolio</h2></div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
          </div>
        </div>
        <div className="row"><div className="col-12"><div className="cleafix small_divider" /></div></div>
        <div className="row mb-4 mb-md-5"><div className="col-md-12 text-center"><ul className="list_none grid_filter filter_tab2 animation" data-animation="fadeInUp" data-animation-delay="0.04s"><li><a href="#" className="current" data-filter="*">all</a></li><li><a href="#" data-filter=".brands">Branding</a></li><li><a href="#" data-filter=".web-design">Web Design</a></li><li><a href="#" data-filter=".development">Development</a></li></ul></div></div>
        <div className="row">
          <div className="col-md-12">
            <ul className="grid_container gutter_medium work_col3 portfolio_gallery portfolio_style2 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
              <li className="grid-sizer" />
              {portfolioItems.map((item) => (
                <li className={`grid_item ${item.classes}`} key={item.title}>
                  <div className="portfolio_item" data-tilt="true">
                    {item.carousel ? (
                      <div className="carousel_slider owl-carousel owl-theme dots_white" data-autoplay="true" data-loop="false" data-animate-in="fadeIn" data-animate-out="fadeOut" data-autoplay-timeout="3000" data-items="1">
                        {item.carousel.map((image) => (
                          <a href="#" className="image_link" key={image}>
                            <img src={`assets/images/${image}`} alt="image" />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a href="#" className="image_link">
                        <img src={`assets/images/${item.image}`} alt="image" />
                      </a>
                    )}
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a href={`assets/images/${item.popupImages[0]}`} className="image_popup">
                          <i className={item.popupImages.length > 1 ? "ion-images" : "ion-image"} />
                        </a>
                        {item.popupImages.slice(1).map((image) => (
                          <a href={`assets/images/${image}`} className="image_popup d-none" key={image} />
                        ))}
                        <a href="portfolio-detail-sidemenu-white.html">
                          <i className="ion-plus" />
                        </a>
                      </div>
                      <h5><a href="portfolio-detail-sidemenu-white.html">{item.title}</a></h5>
                      <p>{item.category}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
