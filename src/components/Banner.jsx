import { useEffect, useRef, useState } from "react";

const socialLinks = [
  ["sc_facebook", "ion-social-facebook"],
  ["sc_twitter", "ion-social-twitter"],
  ["sc_google", "ion-social-googleplus"],
  ["sc_youtube", "ion-social-youtube-outline"],
  ["sc_instagram", "ion-social-instagram-outline"],
];

const CV_URL = "/anas-software-engineer.pdf";
const CV_FILENAME = "Anas-Software-Engineer.pdf";
const DOWNLOAD_DELAY_MS = 3000;

function triggerFileDownload() {
  const a = document.createElement("a");
  a.href = CV_URL;
  a.download = CV_FILENAME;
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function Banner() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const downloadTimerRef = useRef(null);

  const handleDownloadCvClick = (e) => {
    e.preventDefault();
    if (downloadModalOpen) return;
    setDownloadModalOpen(true);
  };

  useEffect(() => {
    if (!downloadModalOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    downloadTimerRef.current = window.setTimeout(() => {
      triggerFileDownload();
      setDownloadModalOpen(false);
    }, DOWNLOAD_DELAY_MS);

    return () => {
      document.body.style.overflow = prevOverflow;
      if (downloadTimerRef.current) {
        window.clearTimeout(downloadTimerRef.current);
        downloadTimerRef.current = null;
      }
    };
  }, [downloadModalOpen]);

  return (
    <section id="home_section" className="banner_section banner_shape">
      <div className="banner_slide_content pb-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-md-7">
              <div className="banner_content banner_center_content">
                <h2 className="animation" data-animation="fadeInUp" data-animation-delay="0.02s">Hello, I&apos;m Anas Siddiqui</h2>
                <div id="typed-strings" className="d-none"><b>Senior Software Engineer</b> <b>Backend Developer</b></div>
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">I&apos;m a <span id="typed-text" className="text_default" /></h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.04s">Backend Engineer with 5+ years of experience building scalable Node.js microservices. Skilled in distributed systems, AWS, and AI integrations, delivering high-performance solutions, optimizing APIs, and supporting millions of users</p>
                <button
                  type="button"
                  className="btn btn-default rounded-0 btn-aylen animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                  onClick={handleDownloadCvClick}
                >
                  Download CV
                </button>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div className="banner_img animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                <img src="assets/images/my_image.png" alt="my_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social_banner social_vertical">
        <ul className="list_none social_icons text-center">
          {socialLinks.map(([cls, icon]) => (
            <li key={cls}><a href="#" className={cls}><i className={icon} /></a></li>
          ))}
        </ul>
      </div>

      {downloadModalOpen && (
        <div
          className="cv-download-popup-overlay animated fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-download-popup-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(10, 10, 15, 0.72)",
            backdropFilter: "blur(4px)",
            animationDuration: "0.35s",
          }}
        >
          <div
            className="cv-download-popup-card animated zoomIn"
            style={{
              width: "100%",
              maxWidth: 400,
              background: "#fff",
              padding: "36px 32px",
              textAlign: "center",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.28)",
              borderRadius: 2,
              animationDuration: "0.45s",
            }}
          >
            <div
              className="cv-download-popup-loader"
              style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}
            >
              <div className="loader-inner ball-scale">
                <div />
                <div />
                <div />
              </div>
            </div>
            <h3
              id="cv-download-popup-title"
              className="text_default"
              style={{ fontSize: "1.35rem", fontWeight: 600, marginBottom: 10 }}
            >
              Preparing your CV
            </h3>
            <p style={{ margin: 0, color: "#555", fontSize: "0.95rem", lineHeight: 1.55 }}>
              Your download will begin automatically in about {DOWNLOAD_DELAY_MS / 1000} seconds.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
