
import { useState } from "react";
import "./App.css";

function App() {
  /* =========================
     DRAWING STACK
  ========================= */

  const [currentDrawing, setCurrentDrawing] = useState(0);

  /* =========================
     SKILLS
  ========================= */

  const skills = [
    { name: "HTML", percentage: 85, icon: "devicon-html5-plain" },
    { name: "CSS", percentage: 80, icon: "devicon-css3-plain" },
    {
      name: "JavaScript",
      percentage: 70,
      icon: "devicon-javascript-plain",
    },
    {
      name: "React",
      percentage: 65,
      icon: "devicon-react-original",
    },
    {
      name: "MongoDB",
      percentage: 60,
      icon: "devicon-mongodb-plain",
    },
    { name: "SQL", percentage: 70, icon: "devicon-mysql-plain" },
    {
      name: "Node.js",
      percentage: 55,
      icon: "devicon-nodejs-plain",
    },
    {
      name: "Express.js",
      percentage: 50,
      icon: "devicon-express-original",
    },
    { name: "C", percentage: 35, icon: "devicon-c-plain" },
    {
      name: "C++",
      percentage: 40,
      icon: "devicon-cplusplus-plain",
    },
    { name: "Java", percentage: 35, icon: "devicon-java-plain" },
    {
      name: "Python",
      percentage: 40,
      icon: "devicon-python-plain",
    },
  ];

  /* =========================
     DRAWING IMAGES
  ========================= */

  const drawings = [
    "/drawings/drawing1.jpeg",
    "/drawings/drawing2.jpeg",
    "/drawings/drawing3.jpeg",
    "/drawings/drawing4.jpeg",
    "/drawings/drawing5.jpeg",
    "/drawings/drawing6.jpeg",
    "/drawings/drawing7.jpeg",
    "/drawings/drawing8.jpeg",
    "/drawings/drawing9.jpeg",
    "/drawings/drawing10.jpeg",
    "/drawings/drawing11.jpeg",
    "/drawings/drawing12.jpeg",
    "/drawings/drawing13.jpeg",
    "/drawings/drawing14.jpeg",
  ];

  /* =========================
     NEXT DRAWING
  ========================= */

  const nextDrawing = () => {
    setCurrentDrawing((currentDrawing + 1) % drawings.length);
  };

  return (
    <div className="portfolio">
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <div className="logo">
          kavi<span>!</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#coding-profiles">Coding Profile</a>
          <a href="#creative">Creative</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

    
<section className="hero" id="home">

  <div className="hero-content">

    <p className="hero-greeting">Hello, I’m</p>

    <h1 className="name">
      Kavi <span>Vadhana</span> R
    </h1>

    <h2 className="hero-title">
      ECE Student <span>&</span> Curious Learner
    </h2>

    <p className="description">
      I’m exploring software development and full-stack technologies,
      while building practical projects and learning how hardware,
      software, and networks come together.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        Explore My Work →
      </a>

      <a href="#about" className="secondary-btn">
        A Little About Me
      </a>
    </div>

   

  </div>


  {/* PROFESSIONAL KV MONOGRAM */}

  <div className="hero-visual">

    <div className="kv-mark">
      <span className="kv-k">K</span>
      <span className="kv-v">V</span>
    </div>

    <div className="kv-line"></div>

    <p className="kv-name">
      KAVI VADHANA R
    </p>

    <p className="kv-subtitle">
      ECE • SOFTWARE • TECHNOLOGY
    </p>

  </div>

</section>



     {/* =========================
    ABOUT
========================= */}

<section className="about-section" id="about">

  
<div><h2 id="1">About</h2></div>
  <div className="about-boxes">

    {/* PROFESSIONAL BOX */}
    <div className="about-box professional-box">

      <span className="about-number">01</span>

      <h3>Building with Technology</h3>

      <p>
        I’m an ECE student interested in software and full-stack development.
        I enjoy coding, building practical projects, and exploring how
        hardware and software can work together.
      </p>

      <p>
        I’m also interested in telecommunications and hope to explore
        cybersecurity as I continue learning.
      </p>

     

    </div>


    {/* CREATIVE BOX */}
    <div className="about-box creative-box">

      <span className="about-number">02</span>

      <h3>Beyond the Syllabus</h3>

      <p>
        Outside academics, I enjoy drawing and trying different creative
        things. I like exploring ideas beyond the syllabus, learning through
        my own interests, and finding different ways to express myself.
      </p>

      <p>
        I enjoy giving myself space to create, experiment, and discover
        something new along the way.
      </p>

    </div>

  </div>

</section>
      {/* =========================
          SKILLS
      ========================= */}

      <section className="skills-section" id="skills">
        <div className="skills-container">
          <p className="skills-label">WHAT I'M LEARNING</p>

          <h2 className="skills-heading">
            My <span>Skills</span>
          </h2>

          <p className="skills-subtitle">
            Technologies I'm learning and working with.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-info">
                  <i className={skill.icon}></i>

                  <span className="skill-name">{skill.name}</span>
                </div>

                <div className="skill-hover">
                  <span className="skill-percentage">
                    {skill.percentage}%
                  </span>

                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-fill"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </section>
  
<section className="education-section" id="education">
  <div className="education-header">
    <p>EDUCATION</p>
    <h2>My Academic Journey</h2>
  </div>

  <div className="education-content">
    <div className="education-timeline">

      <div className="education-year">
        2025 — 2029
      </div>

      <div className="timeline-line">
        <span className="timeline-dot"></span>
      </div>

      <div className="education-card">
        <h3>B.E ECE</h3>

        <h4>R.M.D. Engineering College</h4>

        <p className="location">
          R.S.M Nagar, Kavaraipettai
        </p>

        <div className="education-divider"></div>

        <p>
          Building my foundation in engineering, networking, and
          communication technologies while exploring software
          alongside ECE.
        </p>

        <p>
          Beyond academics, college has helped me become more
          confident, open-minded, and ready to take on new
          opportunities.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* =========================
          PROJECTS
      ========================= */}


<section id="projects" className="projects-section">

  <div className="projects-heading">
    <p className="project-eyebrow">A FEW THINGS I'VE MADE</p>

    <h2>Things I've Built Along the Way</h2>

    <p className="project-subtitle">
      A few ideas I've turned into projects.
    </p>
  </div>

  <div className="project-grid">

    {/* PROJECT 01 */}
    <article className="project-card">

      <div className="project-title-bar">
        <div className="project-number">01</div>

        <div className="project-title-content">
          <span className="project-category">WEB APPLICATION</span>
          <h3>Messenger</h3>
        </div>
      </div>

      <div className="project-image-card">
        <img
          src="/images/messenger.png"
          alt="Messenger project screenshot"
          loading="lazy"
        />
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/kavivadhana/messenger-version1"
          target="_blank"
          rel="noreferrer"
          className="project-btn github-btn"
        >
          GitHub <span>↗</span>
        </a>

        <a
          href="https://your-messenger-live-demo.com"
          target="_blank"
          rel="noreferrer"
          className="project-btn demo-btn"
        >
          Live Demo <span>↗</span>
        </a>

      </div>

    </article>


    {/* PROJECT 02 */}
    <article className="project-card">

      <div className="project-title-bar">
        <div className="project-number">02</div>

        <div className="project-title-content">
          <span className="project-category">FRONTEND PROJECT</span>
          <h3>Netflix Clone</h3>
        </div>
      </div>

      <div className="project-image-card">
        <img
          src="/images/netflix.png"
          alt="Netflix Clone project screenshot"
          loading="lazy"
        />
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/kavivadhana/kavivadhana-Netflix-Homepage-Clone"
          target="_blank"
          rel="noreferrer"
          className="project-btn github-btn"
        >
          GitHub <span>↗</span>
        </a>

        <a
          href="https://kavivadhana-netflix-homepage-clone.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="project-btn demo-btn"
        >
          Live Demo <span>↗</span>
        </a>

      </div>

    </article>


    {/* PROJECT 03 */}
    <article className="project-card">

      <div className="project-title-bar">
        <div className="project-number">03</div>

        <div className="project-title-content">
          <span className="project-category">DASHBOARD</span>
          <h3>Attendance Dashboard</h3>
        </div>
      </div>

      <div className="project-image-card">
        <img
          src="/images/attendance-dashbroad.png"
          alt="Attendance Dashboard project screenshot"
          loading="lazy"
        />
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/kavivadhana/Attendance-Dashboard"
          target="_blank"
          rel="noreferrer"
          className="project-btn github-btn"
        >
          GitHub <span>↗</span>
        </a>

        <a
          href="https://your-attendance-live-demo.com"
          target="_blank"
          rel="noreferrer"
          className="project-btn demo-btn"
        >
          Live Demo <span>↗</span>
        </a>

      </div>

    </article>


    {/* PROJECT 04 */}
    <article className="project-card">

      <div className="project-title-bar">
        <div className="project-number">04</div>

        <div className="project-title-content">
          <span className="project-category">PRODUCTIVITY</span>
          <h3>To-Do List</h3>
        </div>
      </div>

      <div className="project-image-card">
        <img
          src="/images/to-dolist.png"
          alt="To-Do List project screenshot"
          loading="lazy"
        />
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/kavivadhana/To-do-list-"
          target="_blank"
          rel="noreferrer"
          className="project-btn github-btn"
        >
          GitHub <span>↗</span>
        </a>

        <a
          href="https://your-todo-live-demo.com"
          target="_blank"
          rel="noreferrer"
          className="project-btn demo-btn"
        >
          Live Demo <span>↗</span>
        </a>

      </div>

    </article>

  </div>

  <p className="projects-footer">
    ✦ Every project teaches me something new.
  </p>

</section>

{/* =========================
    CODING PROFILES
========================= */}

<section id="coding-profiles" className="coding-section">

  <div className="coding-heading">
    <p className="coding-eyebrow">CODING PROFILES</p>

    <h2>
      Where I Practice & <span>Grow</span>
    </h2>

    <p className="coding-subtitle">
      Explore my coding profiles and problem-solving journey.
    </p>
  </div>

  <div className="coding-grid">

    {/* LEETCODE */}
    <article className="profile-card">

      <div className="profile-icon leetcode-icon">
        <i className="devicon-leetcode-plain"></i>
      </div>

      <h3>LeetCode</h3>

      <p>Problem Solving</p>

      <a
        href="https://leetcode.com/u/kavi_vadhana_07/"
        target="_blank"
        rel="noreferrer"
        className="profile-btn"
      >
        <span>↗</span>
        View Profile
      </a>

    </article>


    {/* GITHUB */}
    <article className="profile-card">

      <div className="profile-icon github-icon">
        <i className="devicon-github-original"></i>
      </div>

      <h3>GitHub</h3>

      <p>Projects & Code</p>

      <a
        href="https://github.com/kavivadhana"
        target="_blank"
        rel="noreferrer"
        className="profile-btn"
      >
        <span>↗</span>
        View Profile
      </a>

    </article>


   


    {/* LINKEDIN */}
    <article className="profile-card">

      <div className="profile-icon linkedin-icon">
        <i className="devicon-linkedin-plain"></i>
      </div>

      <h3>LinkedIn</h3>

      <p>Professional Profile</p>

      <a
        href="https://www.linkedin.com/in/kavi-vadhana-r"
        target="_blank"
        rel="noreferrer"
        className="profile-btn"
      >
        <span>↗</span>
        View Profile
      </a>

    </article>

  </div>

</section>






      {/* =========================
          CREATIVE
      ========================= */}

      <section className="creative-section" id="creative">
        <div className="creative-heading">
          <p className="creative-small-title">
            A LITTLE PIECE OF MY WORLD
          </p>

          <h2>
            Things I Make
            <span> When I'm Not Coding</span>
          </h2>

          <p>
            Sketches, colours, little ideas, and things I create just because I can.
          </p>
        </div>

        {/* DRAWING SHOWCASE */}

        <div className="drawing-showcase">
          

          {/* CLICKABLE DRAWING STACK */}

          <div
            className="drawing-stack"
            onClick={nextDrawing}
            role="button"
            tabIndex="0"
            aria-label="Show next drawing"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                nextDrawing();
              }
            }}
          >
            {drawings.map((image, index) => {
              const position =
                (index - currentDrawing + drawings.length) %
                drawings.length;

              return (
                <div
                  className={`drawing-card card-${position + 1}`}
                  key={image}
                >
                  <img
                    src={image}
                    alt={`Drawing ${index + 1}`}
                    loading="lazy"
                  />

                  {position === 0 && (
                    <div className="drawing-counter">
                      {String(currentDrawing + 1).padStart(2, "0")}
                      {" / "}
                      {String(drawings.length).padStart(2, "0")}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SIDE NOTE */}

          <div className="drawing-side-note">
            <span>✦</span>

            <p>
              tap to turn
              <br />
              the page
            </p>
          </div>
        </div>

        {/* CREATIVE NOTE */}

        <div className="creative-note">
          <span>✦</span>

          <p>
            Some things don't need a purpose.
            <br />
            Sometimes I just make them.
          </p>

          <span>✦</span>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      
{/* =========================
    CONTACT SECTION
========================= */}

<section className="contact-section" id="contact">

  <div className="contact-container">

    {/* LEFT CONTENT */}

    <div className="contact-intro">

      <p className="contact-eyebrow">
        LET'S CONNECT
      </p>

      <h2>
        Let's Make
        <span> Something.</span>
      </h2>

      <p className="contact-description">
        I'm always interested in learning, building, and connecting
        with people working on interesting ideas.
      </p>

      <p className="contact-description">
        Whether it's an internship opportunity, a project,
        a hackathon, or simply a conversation about technology,
        feel free to reach out.
      </p>

      

    </div>


    {/* RIGHT CONTACT CARD */}

    <div className="contact-card">

      <div className="contact-card-header">
        <span>GET IN TOUCH</span>
        <span className="contact-arrow">↗</span>
      </div>


      {/* EMAIL */}

      <a
        href="mailto:kavivadhana.r@gmail.com"
        className="contact-item"
      >

        <div className="contact-icon">
          ✉
        </div>

        <div className="contact-item-content">
          <span>Email</span>
          <strong>contact</strong>
          
        </div>

        <span className="contact-item-arrow">↗</span>

      </a>


      {/* LINKEDIN */}

      <a
        href="https://www.linkedin.com/in/kavi-vadhana-r"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >

        <div className="contact-icon linkedin-contact">
          in
        </div>

        <div className="contact-item-content">
          <span>LinkedIn</span>
          <strong>Connect with me</strong>
        </div>

        <span className="contact-item-arrow">↗</span>

      </a>


      {/* GITHUB */}

      {/* GITHUB */}
<a
  href="https://github.com/kavivadhana"
  target="_blank"
  rel="noreferrer"
  className="contact-item"
>
  <div className="contact-icon github-contact">
    <i className="devicon-github-original"></i>
  </div>

  <div className="contact-item-content">
    <span>GitHub</span>
    <strong>Explore my projects</strong>
  </div>

  <span className="contact-item-arrow">↗</span>
</a>

      <div className="contact-card-footer">
        <span>Currently learning.</span>
        <span>Always building.</span>
      </div>

    </div>

  </div>


  {/* BOTTOM */}

  <div className="contact-bottom">

    <span>KAVI VADHANA</span>

    <p>
      ECE Student · Developer · Curious Mind
    </p>

  </div>

</section>

    </div>
  );
}

export default App;
