import { useEffect } from "react";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Counter from "./components/Counter.jsx";
import Experience from "./components/Experience.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollUp from "./components/ScrollUp.jsx";

function App() {
  useEffect(() => {
    document.body.setAttribute("data-spy", "scroll");
    document.body.setAttribute("data-target", ".navbar-nav");
    document.body.setAttribute("data-offset", "110");

    return () => {
      document.body.removeAttribute("data-spy");
      document.body.removeAttribute("data-target");
      document.body.removeAttribute("data-offset");
    };
  }, []);

  useEffect(() => {
    let typedInstance;
    let intervalId;

    const initLegacyAnimations = () => {
      const $ = window.jQuery;
      if (!$) return false;

      // Preloader
      $(".preloader").delay(700).fadeOut(500);

      // Typed text
      if (window.Typed && $("#typed-text").length) {
        typedInstance = new window.Typed("#typed-text", {
          stringsElement: "#typed-strings",
          typeSpeed: 60,
          backSpeed: 30,
          startDelay: 1000,
          loop: true,
          loopCount: Infinity,
        });
      }

      // Owl carousel
      $(".carousel_slider").each(function initOwl() {
        const $carousel = $(this);
        if ($carousel.hasClass("owl-loaded") || !$carousel.owlCarousel) return;
        $carousel.owlCarousel({
          dots: $carousel.data("dots"),
          loop: $carousel.data("loop"),
          items: $carousel.data("items"),
          margin: $carousel.data("margin"),
          mouseDrag: $carousel.data("mouse-drag"),
          touchDrag: $carousel.data("touch-drag"),
          autoHeight: $carousel.data("autoheight"),
          center: $carousel.data("center"),
          nav: $carousel.data("nav"),
          rewind: $carousel.data("rewind"),
          navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
          autoplay: $carousel.data("autoplay"),
          animateIn: $carousel.data("animate-in"),
          animateOut: $carousel.data("animate-out"),
          autoplayTimeout: $carousel.data("autoplay-timeout"),
          smartSpeed: $carousel.data("smart-speed"),
          responsive: $carousel.data("responsive"),
        });
      });

      // Scroll reveal (waypoints)
      $(".animation").each(function initWaypoint() {
        const $el = $(this);
        const animationClass = $el.attr("data-animation");
        const animationDelay = $el.attr("data-animation-delay");
        $el.css({
          "-webkit-animation-delay": animationDelay,
          "-moz-animation-delay": animationDelay,
          "animation-delay": animationDelay,
          opacity: 0,
        });
        if ($el.waypoint) {
          $el.waypoint(
            function onReach() {
              $el.addClass("animated").css("opacity", "1").addClass(animationClass);
            },
            { triggerOnce: true, offset: "90%" }
          );
        }
      });

      // Counter
      if ($.fn.counterUp) {
        $(".counter").counterUp({ time: 1500 });
      }

      // Scroll up
      $(window)
        .off("scroll.reactScrollup")
        .on("scroll.reactScrollup", () => {
          if ($(window).scrollTop() > 150) {
            $(".scrollup").fadeIn();
          } else {
            $(".scrollup").fadeOut();
          }
        });
      $(".scrollup")
        .off("click.reactScrollup")
        .on("click.reactScrollup", (e) => {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
        });

      return true;
    };

    // Wait until legacy plugins are loaded, then initialize once.
    intervalId = window.setInterval(() => {
      if (initLegacyAnimations()) {
        window.clearInterval(intervalId);
      }
    }, 150);

    return () => {
      window.clearInterval(intervalId);
      if (typedInstance && typedInstance.destroy) typedInstance.destroy();
      if (window.jQuery) window.jQuery(window).off("scroll.reactScrollup");
    };
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <div className="page-content">
        <Banner />
        <About />
        <Services />
        <Portfolio />
        <Counter />
        <Experience />
        <Testimonial />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </div>
      <ScrollUp />
    </>
  );
}

export default App;
