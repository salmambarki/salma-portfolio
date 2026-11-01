import { useEffect, useRef, useState } from "react";
import "./index.css";

const GITHUB_URL = "https://github.com/salmambarki";
const LINKEDIN_URL = "https://www.linkedin.com/in/salma-mbarki-ab81b4260/";

const skills = [
  { title: "Programming", text: "Python · Java · JavaScript · C · C++ · HTML · CSS" },
  { title: "Full-Stack", text: "React.js · FastAPI · Spring Boot · Node.js · Express.js" },
  { title: "Data & Databases", text: "PostgreSQL · MongoDB · MySQL · NoSQL · Data Visualization" },
  { title: "Web Services", text: "REST · GraphQL · SOAP · JWT" },
  { title: "Tools", text: "Docker · VS Code · IntelliJ · Eclipse · UML" },
  { title: "Automation", text: "TIA Portal · WinCC · Arduino · Proteus 8" },
  { title: "Mobile", text: "Flutter · Firebase" },
  { title: "Design", text: "UI/UX · Interface Design · Interactive Dashboards" },
];

const experiences = [
  {
    title: "Final Year Project Intern",
    company: "Tunis Stock Exchange (BVMT)",
    date: "Feb 2026 – May 2026",
    description:
      "Designed and developed an intelligent web platform for real-time stock market data monitoring and visualization.",
    technologies: "FastAPI · React.js · MongoDB · JWT · Docker · OPTIQ/SBE",
  },
  {
    title: "Engineering Intern",
    company: "Tunis Stock Exchange (BVMT)",
    date: "Jul 2025 – Aug 2025",
    description:
      "Processed OPTIQ trading data using Python, organized and stored data in PostgreSQL, and developed an interactive React dashboard.",
    technologies: "Python · PostgreSQL · React.js · OPTIQ",
  },
  {
    title: "Robotics & AI Trainer",
    company: "FRTN Technologies · Ariana",
    date: "Aug 2024 – Sep 2024",
    description:
      "Trained children aged 8–16 in robotics and artificial intelligence, created educational programs, and led hands-on workshops.",
    technologies: "Robotics · AI · Training",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "ArabSoft",
    date: "Jun 2024 – Jul 2024",
    description:
      "Developed a human resources management website covering employees, roles, departments and leave requests.",
    technologies: "React.js · Spring Boot · MySQL",
  },
  {
    title: "Final Year Project Intern",
    company: "Sagemcom",
    date: "Feb 2023 – May 2023",
    description:
      "Programmed an automatic screwing machine in Ladder and contributed to industrial process optimization.",
    technologies: "TIA Portal · WinCC · Ladder",
  },
  {
    title: "Technical Intern",
    company: "Adwya Laboratories",
    date: "Jan 2022 – Feb 2022",
    description:
      "Detected and resolved production machine failures and collaborated with technical teams.",
    technologies: "Industrial Maintenance · Automation",
  },
];

/*
  VIDEO : ta vidéo est dans  public/video/
  Remplace NOM_DE_TA_VIDEO.mp4 par le nom exact du fichier (sans espaces de préférence).
  Le chemin commence par /video/ (sans "public" et sans "..").
*/
const VIDEO_PATH = "/video/NOM_DE_TA_VIDEO.mp4";

const projects = [
  {
    title: "Real-Time Stock Market Platform",
    type: "Web",
    description:
      "Intelligent web platform for processing, monitoring and visualizing real-time stock market data.",
    technologies: "FastAPI · React.js · MongoDB · JWT · Docker · OPTIQ/SBE",
    github: "",
    demo: "",
  },
  {
    title: "Web Services Project",
    type: "Web",
    description:
      "Website built around three web service architectures, each applied to a different business domain.",
    services: [
      { name: "REST", label: "Academic documents management" },
      { name: "GraphQL", label: "Visa management" },
      { name: "SOAP", label: "Medical records management" },
    ],
    technologies: "REST · GraphQL · SOAP",
    github: "",
    demo: "",
  },
  {
    title: "E-Commerce Mobile App",
    type: "Mobile",
    description:
      "Mobile e-commerce application built with Flutter and Firebase to provide a modern shopping experience.",
    technologies: "Flutter · Firebase",
    video: VIDEO_PATH,
    poster: "",
    github: "",
    demo: "",
  },
  {
    title: "Insurance Website",
    type: "Web",
    description: "Full-stack web application developed for insurance management.",
    technologies: "React.js · Express.js · MongoDB",
    github: "",
    demo: "",
  },
  {
    title: "HR Management Website",
    type: "Web",
    description:
      "Human resources management platform for employees, roles, departments and leave requests.",
    technologies: "React.js · Spring Boot · MySQL",
    github: "",
    demo: "",
  },
  {
    title: "Automatic Screwing Machine",
    type: "Automation",
    description:
      "Industrial automation project focused on programming and optimizing an automatic screwing machine.",
    technologies: "TIA Portal · WinCC",
    github: "",
    demo: "",
  },
];

/* ---------- Icons ---------- */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 8.2H3V21h3.5V8.2ZM4.8 3A2.1 2.1 0 1 0 4.8 7.2 2.1 2.1 0 0 0 4.8 3ZM21 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.2-3.8 2.1V8.2H8.8V21h3.5v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21H21v-7.3Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3V6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v12m0 0-5-5m5 5 5-5M5 20h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

/* ---------- Animation helpers ---------- */
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, progress };
}

function VideoModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{project.title}</h4>
          <button className="modal-close" onClick={onClose} aria-label="Close video">
            ✕
          </button>
        </div>
        <video
          src={project.video}
          poster={project.poster || undefined}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}

/* ---------- App ---------- */
function App() {
  const { scrolled, progress } = useScrollState();
  const [activeVideo, setActiveVideo] = useState(null);
  // IMPORTANT : doit rester null. Le chemin de la vidéo se règle dans VIDEO_PATH (en haut du fichier).

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="logo" href="#home">
          SM
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cv" href="/cv/Salma.pdf" download>
          <DownloadIcon />
          CV
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <div className="hero-content">
            <p className="section-label hero-anim" style={{ "--d": "0ms" }}>
              HELLO, I'M
            </p>

            <h1 className="hero-anim" style={{ "--d": "100ms" }}>
              Salma <span>Mbarki</span>
            </h1>

            <h2 className="hero-anim" style={{ "--d": "220ms" }}>
              Software Engineer
              <br />
              Full-Stack &amp; Mobile Developer
              <br />
              Data · UI/UX Design
            </h2>

            <p className="hero-description hero-anim" style={{ "--d": "340ms" }}>
              I build modern web and mobile applications, work with real-time
              data and create clear, user-friendly digital experiences.
            </p>

            <div className="hero-buttons hero-anim" style={{ "--d": "460ms" }}>
              <a href="#projects" className="button primary">
                View My Projects
              </a>

              <a href="/cv/Salma.pdf" download className="button secondary">
                <DownloadIcon />
                Download CV
              </a>

              <a href="mailto:salmambarki621@gmail.com" className="button secondary">
                <MailIcon />
                Contact Me
              </a>
            </div>

            <div className="social-links hero-anim" style={{ "--d": "580ms" }}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual hero-anim" style={{ "--d": "300ms" }}>
            <div className="decor-circle circle-one"></div>
            <div className="decor-circle circle-two"></div>
            <div className="decor-circle circle-three"></div>

            <div className="profile-card">
              <div className="profile-avatar">SM</div>
              <h3>Salma Mbarki</h3>
              <p>Software Engineer</p>

              <div className="availability">
                <span></span>
                Open to opportunities
              </div>

              <small>Tunis, Tunisia</small>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section white-section">
          <div className="container">
            <Reveal>
              <p className="section-label">ABOUT ME</p>
            </Reveal>

            <div className="about-grid">
              <Reveal>
                <h3>
                  Building ideas
                  <br />
                  into real solutions.
                </h3>
              </Reveal>

              <Reveal delay={150}>
                <p>
                  I am a software engineer focused on full-stack and mobile
                  development, data analysis and interface design.
                </p>
                <p>
                  I enjoy developing web applications, processing real-time
                  data, managing databases and creating interactive dashboards
                  with intuitive user experiences.
                </p>
                <p>
                  My goal is to combine software engineering, data and design
                  to build efficient and useful digital solutions.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section light-section">
          <div className="container">
            <Reveal>
              <p className="section-label">SKILLS</p>
              <h3 className="section-title">Technical Skills</h3>
            </Reveal>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Reveal
                  as="article"
                  className="skill-card"
                  key={skill.title}
                  delay={(index % 4) * 90}
                >
                  <div className="skill-number">{String(index + 1).padStart(2, "0")}</div>
                  <h4>{skill.title}</h4>
                  <p>{skill.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section white-section">
          <div className="container">
            <Reveal>
              <p className="section-label">EXPERIENCE</p>
              <h3 className="section-title">Experience & Internships</h3>
            </Reveal>

            <div className="timeline">
              {experiences.map((experience) => (
                <Reveal
                  as="article"
                  className="timeline-item"
                  key={`${experience.title}-${experience.date}`}
                >
                  <div className="timeline-dot"></div>
                  <div className="experience-date">{experience.date}</div>

                  <div className="experience-content">
                    <h4>{experience.title}</h4>
                    <h5>{experience.company}</h5>
                    <p>{experience.description}</p>

                    <div className="tags">
                      {experience.technologies.split(" · ").map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section light-section">
          <div className="container">
            <Reveal>
              <p className="section-label">PROJECTS</p>
              <h3 className="section-title">Featured Projects</h3>
              <p className="section-intro">
                A selection of projects combining full-stack development, web
                services, data processing, mobile development and industrial
                automation.
              </p>
            </Reveal>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal
                  as="article"
                  className="project-card"
                  key={project.title}
                  delay={(index % 3) * 100}
                >
                  <div className={`project-cover cover-${index % 4}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <em className="project-type">{project.type}</em>

                    {project.services ? (
                      <div className="cover-services">
                        {project.services.map((s) => (
                          <b key={s.name}>{s.name}</b>
                        ))}
                      </div>
                    ) : (
                      <div className="code-decoration">&lt;/&gt;</div>
                    )}

                    {project.video && (
                      <button
                        className="play-button"
                        onClick={() => setActiveVideo(project)}
                        aria-label={`Watch ${project.title} demo video`}
                      >
                        <PlayIcon />
                        <span>Watch demo</span>
                      </button>
                    )}
                  </div>

                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>

                    {project.services && (
                      <ul className="service-list">
                        {project.services.map((s) => (
                          <li key={s.name}>
                            <strong>{s.name}</strong>
                            <span>{s.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="tags">
                      {project.technologies.split(" · ").map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.video && (
                        <button
                          className="link-button"
                          onClick={() => setActiveVideo(project)}
                        >
                          ▶ Demo video
                        </button>
                      )}

                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      ) : (
                        <span>GitHub link coming soon</span>
                      )}

                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live Demo ↗
                        </a>
                      ) : (
                        !project.video && <span>Demo coming soon</span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION + CERTIFICATIONS */}
        <section id="education" className="section white-section">
          <div className="container education-grid">
            <div>
              <Reveal>
                <p className="section-label">EDUCATION</p>
                <h3 className="section-title">Education</h3>
              </Reveal>

              <Reveal className="education-card">
                <span>2023 – 2026</span>
                <h4>
                  Engineering Cycle in Computer Science, Networks & Multimedia (IRM)
                </h4>
                <p>International Private Polytechnic School of Tunis</p>
              </Reveal>

              <Reveal className="education-card" delay={100}>
                <span>2020 – 2023</span>
                <h4>Applied Bachelor's Degree in Electrical Engineering</h4>
                <p>Automation & Industrial Computing · ISET Rades</p>
              </Reveal>

              <Reveal className="education-card" delay={200}>
                <span>2019 – 2020</span>
                <h4>High School Diploma in Technical Sciences</h4>
                <p>Carthage Presidency High School</p>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <p className="section-label">CERTIFICATIONS</p>
                <h3 className="section-title">Certifications</h3>
              </Reveal>

              <div className="certifications">
                {[
                  ["ITS Python", "2025"],
                  ["DELF B2", "2025"],
                  ["ITS Java", "2024"],
                  ["ITS JavaScript", "2024"],
                  ["ITS Databases", "2024"],
                  ["Microsoft Office Specialist & Associate", "2024"],
                ].map(([name, year], i) => (
                  <Reveal key={name} delay={i * 70}>
                    <strong>{name}</strong>
                    <span>{year}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="section light-section">
          <div className="container">
            <Reveal>
              <p className="section-label">LANGUAGES</p>
              <h3 className="section-title">Languages</h3>
            </Reveal>

            <div className="language-grid">
              {[
                ["Arabic", "Native"],
                ["French", "DELF B2"],
                ["English", "Conversational"],
              ].map(([lang, level], i) => (
                <Reveal key={lang} delay={i * 100}>
                  <strong>{lang}</strong>
                  <span>{level}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container contact-content">
            <Reveal>
              <p className="section-label">CONTACT</p>
              <h3>Let's build something together.</h3>
              <p>
                I am open to opportunities in software development, full-stack
                development and data.
              </p>

              <a href="mailto:salmambarki621@gmail.com" className="button contact-button">
                <MailIcon />
                salmambarki621@gmail.com
              </a>

              <div className="contact-socials">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>© 2026 Salma Mbarki</p>
          <p>Software Engineer · Full-Stack &amp; Mobile Developer · Data · UI/UX</p>
        </div>
      </footer>

      {activeVideo && (
        <VideoModal project={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}

export default App;
