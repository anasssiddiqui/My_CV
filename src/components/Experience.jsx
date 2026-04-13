const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Devnagri AI Pvt Ltd",
    period: "2024 - Present",
    location: "Noida, India",
    achievements: [
      "Led development of AI translation platform serving 50K+ users",
      "Implemented real-time processing reducing latency by 40%",
      "Architected scalable microservices infrastructure"
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Mongodb"]
  },
  {
    title: "Senior Software Engineer",
    company: "Anviam Solutions Pvt",
    period: "2023 - 2024",
    location: "Mohali, India",
    achievements: [
      "Built enterprise courier management system",
      "Reduced operational costs by 30% through automation",
      "Integrated third-party APIs for seamless logistics"
    ],
    technologies: ["React", "Express.js", "MongoDB", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "Paras Technologies",
    period: "2022 - 2023",
    location: "Mohali, India",
    achievements: [
      "Developed quoting and sales automation platform",
      "Implemented real-time collaboration features",
      "Improved system performance by 60%"
    ],
    technologies: ["Vue.js", "Node.js", "MySQL", "Redis"]
  },
  {
    title: "Junior Software Engineer",
    company: "Cqlsys Technologies",
    period: "2020 - 2021",
    location: "Mohali, India",
    achievements: [
      "Contributed to multiple client projects",
      "Built responsive web applications",
      "Maintained and optimized existing codebase"
    ],
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"]
  }
];

import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">
            Building scalable solutions and delivering impactful results across diverse technology stacks
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={exp.title}>
              {/* Timeline Dot */}
              <div className="timeline-dot">
                <div className="dot-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                <div className="card-header">
                  <div className="job-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <h4 className="company-name">{exp.company}</h4>
                      <div className="meta-info">
                        <span className="period">{exp.period}</span>
                        <span className="location">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        <span className="bullet">{'\u2022'}</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="technologies">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
