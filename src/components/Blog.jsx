import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiJavascript, SiMysql, SiExpress, SiNestjs, SiPostgresql, SiRedis, SiRabbitmq, SiGithubactions, SiJquery } from "react-icons/si";
import { TbApi, TbDatabase, TbLayersLinked, TbTopologyRing2, TbRoute, TbSitemap, TbBolt, TbCreditCard, TbPlugConnected, TbBrain, TbMessageChatbot, TbSettingsAutomation, TbBrandNodejs, TbClockPlay, TbArrowsShuffle, TbCloud, TbGitBranch, TbAutomation, TbExchange } from "react-icons/tb";

function Blog() {
  const extendedIcons = [
    FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaHtml5, FaCss3Alt,
    SiTypescript, SiNextdotjs, SiMongodb, SiJavascript, SiMysql, SiExpress, SiNestjs, SiPostgresql, SiRedis, SiRabbitmq, SiGithubactions, SiJquery,
    TbApi, TbDatabase, TbLayersLinked, TbTopologyRing2, TbRoute, TbSitemap, TbBolt, TbCreditCard, TbPlugConnected, TbBrain, TbMessageChatbot, TbSettingsAutomation, TbBrandNodejs, TbClockPlay, TbArrowsShuffle, TbCloud, TbGitBranch, TbAutomation, TbExchange
  ];

  return (
    <section id="blog" className="pb_70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <h2>Technology Stack</h2>
            </div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">
              A comprehensive toolkit of modern technologies used to build scalable applications.
            </p>
          </div>
        </div>

        <div className="row"><div className="col-12"><div className="cleafix small_divider" /></div></div>

        <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          {/* Programming Languages */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-purple me-2">
                    Programming Languages
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <FaPython />
                  <SiJavascript />
                  <SiTypescript />
                  <SiMysql />
                </div>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-success me-2">
                    Backend Development
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <FaNodeJs />
                  <SiExpress />
                  <SiTypescript />
                  <SiNestjs />
                  <TbApi />
                </div>
              </div>
            </div>
          </div>

          {/* Databases & Storage */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-warning me-2">
                    Databases & Storage
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <SiMongodb />
                  <SiMysql />
                  <SiPostgresql />
                  <SiRedis />
                  <TbDatabase />
                </div>
              </div>
            </div>
          </div>

          {/* Architecture & System Design */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-info me-2">
                    Architecture & System Design
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <TbLayersLinked />
                  <TbTopologyRing2 />
                  <TbRoute />
                  <TbSitemap />
                  <TbBolt />
                  <TbCreditCard />
                  <TbPlugConnected />
                </div>
              </div>
            </div>
          </div>

          {/* AI Integrations */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-danger me-2">
                    AI Integrations
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <TbBrain />
                  <TbMessageChatbot />
                  <TbSettingsAutomation />
                </div>
              </div>
            </div>
          </div>

          {/*Messaging & Async Processing*/}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-secondary me-2">
                    Messaging & Async Processing
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <SiRabbitmq />
                  <TbBrandNodejs />
                  <TbClockPlay />
                  <TbArrowsShuffle />
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-primary me-2">
                    Cloud & DevOps
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <FaAws />
                  <SiGithubactions />
                  <TbCloud />
                  <TbGitBranch />
                  <TbAutomation />
                </div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="col-lg-4 col-md-6">
            <div className="icon_box icon_box_style_2">
              <div className="icon_box_content">
                <div className="d-flex align-items-center mb-3">
                  <small className="text-uppercase fw-bold text-dark me-2">
                    Frontend
                  </small>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex gap-3 text-muted fs-4">
                  <FaReact />
                  <FaHtml5 />
                  <FaCss3Alt />
                  <SiJquery />
                  <SiNextdotjs />
                  <TbExchange />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXTENDED ARSENAL */}
        <div className="row mt-4 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Extended Arsenal</h5>
              <small className="text-muted">{extendedIcons.length}+ technologies</small>
            </div>
            <div className="tech-arsenal-container">
              <div className="tech-scroll-wrapper">
                {[...extendedIcons, ...extendedIcons].map((Icon, i) => (
                  <Icon key={i} className="tech-icon" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

/* CSS for Tech Stack Icons and Extended Arsenal Scrolling */
const style = document.createElement('style');
style.textContent = `
  .tech-arsenal-container {
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .tech-scroll-wrapper {
    display: flex;
    animation: scroll-left 25s linear infinite;
    width: max-content;
  }

  .tech-scroll-wrapper:hover {
    animation-play-state: paused;
  }

  .tech-icon {
    font-size: 1.5rem !important;
    color: #6c757d !important;
    margin: 0 1.5rem !important;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .tech-icon:hover {
    color: #007bff !important;
    transform: scale(1.1);
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Custom styles for tech stack category icons */
  .icon_box_content .d-flex.text-muted.fs-4 {
    gap: 1.25rem !important;
  }

  .icon_box_content .d-flex.text-muted.fs-4 > * {
    font-size: 1.15em !important;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .icon_box_content .d-flex.text-muted.fs-4 > *:hover {
    transform: scale(1.05);
    color: #007bff !important;
  }
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(style);
}
