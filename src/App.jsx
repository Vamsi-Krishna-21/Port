
import { useState } from 'react'
import {
  ArrowDownToLine, ArrowUpRight, Github, Mail, Menu, X, Code2,
  Monitor, Database, BrainCircuit, GraduationCap, MapPin, ExternalLink,
  BriefcaseBusiness
} from 'lucide-react'

const GITHUB = 'https://github.com/Vamsi-Krishna-21'
const EMAIL = 'vamsikrishna212006@gmail.com'
const LINKEDIN = ''

const skills = [
  { title: 'Frontend', icon: Monitor, items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'] },
  { title: 'Core concepts', icon: Code2, items: ['DOM manipulation', 'Component-based UI', 'Async JavaScript', 'Data Structures & Algorithms'] },
  { title: 'Backend & tools', icon: Database, items: ['FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'Git & GitHub', 'Postman', 'Docker'] },
  { title: 'AI & retrieval', icon: BrainCircuit, items: ['RAG', 'FAISS', 'Semantic similarity', 'Vector embeddings', 'Ollama / OpenAI'] },
]

const projects = [
  {
    number: '01',
    category: 'FULL-STACK · RAG',
    title: 'Context-Aware Retrieval-Augmented Generation',
    description: 'A document question-answering application designed to answer queries about uploaded PDFs using retrieval and similarity validation.',
    tags: ['React', 'FastAPI', 'MongoDB', 'FAISS', 'Docker'],
    bullets: [
      'Adaptive chunking and query rewriting',
      'Semantic retrieval and source citations',
      'LLM-based answer generation',
    ],
    href: 'https://github.com/Vamsi-Krishna-21/ca-rag1',
    linkLabel: 'View repository',
    visual: 'rag',
  },
  {
    number: '02',
    category: 'FRONTEND · VALIDATION',
    title: 'Login Validation',
    description: 'A login workflow project built with a React frontend and Node.js backend.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
    bullets: [
      'Frontend and backend integration',
      'Login form workflow',
      'Focus on clear, understandable interaction',
    ],
    href: GITHUB,
    linkLabel: 'Find project on GitHub',
    visual: 'login',
  },
  {
    number: '03',
    category: 'FRONTEND · JAVASCRIPT GAME',
    title: 'Galaxy Wizard — Number Guessing',
    description: 'An interactive number guessing game with VS Computer, VS Friend, and Duel modes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Multiple game modes',
      'Interactive gameplay and user feedback',
      'Practice with JavaScript logic and DOM interaction',
    ],
    href: 'https://github.com/Vamsi-Krishna-21/Number-Guessing',
    demo: 'https://vamsi-krishna-21.github.io/Number-Guessing/',
    linkLabel: 'Source Code',
    visual: 'game',
  },
  {
    number: '04',
    category: 'FRONTEND · JAVASCRIPT TOOL',
    title: 'Currency Calculator',
    description: 'A web-based currency calculator with a simple interface for currency conversion.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Interactive currency conversion interface',
      'Live demo hosted on GitHub Pages',
      'Source code available on GitHub',
    ],
    href: 'https://github.com/Vamsi-Krishna-21/Currency-Calculator',
    demo: 'https://vamsi-krishna-21.github.io/Currency-Calculator/',
    linkLabel: 'Source Code',
    visual: 'currency',
  },
]

function ProjectVisual({ type }) {
  if (type === 'login') {
    return (
      <div className="project-visual login-visual" aria-label="Illustrative login interface">
        <div className="login-window">
          <div className="login-mark">VK</div>
          <h4>Welcome back</h4>
          <p>Sign in to your account</p>
          <label>Email address</label>
          <div className="fake-input" />
          <label>Password</label>
          <div className="fake-input" />
          <div className="fake-button">Sign in</div>
          <small>Illustrative UI preview</small>
        </div>
      </div>
    )
  }

  if (type === 'game') {
    return (
      <div className="project-visual game-visual" aria-label="Number guessing game preview">
        <div className="game-preview">
          <span className="game-emoji">🪄</span>
          <h4>Galaxy Wizard</h4>
          <p>NUMBER GUESSING GAME</p>
          <div className="game-number">?</div>
          <div className="game-preview-button">Start Playing</div>
          <small>Illustrative UI preview</small>
        </div>
      </div>
    )
  }

  if (type === 'currency') {
    return (
      <div className="project-visual currency-visual" aria-label="Currency calculator preview">
        <div className="game-preview">
          <span className="game-emoji">💱</span>
          <h4>Currency Calculator</h4>
          <p>CURRENCY CONVERTER</p>
          <div className="game-number">₹ ⇄ $</div>
          <div className="game-preview-button">Convert Currency</div>
          <small>Illustrative UI preview</small>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual rag-visual" aria-label="Illustrative document question-answering interface">
      <div className="mock-window">
        <div className="mock-bar" />
        <div className="mock-content">
          <div className="mock-sidebar" />
          <div className="mock-lines"><b /><b /><b /><i /><b /><b /></div>
        </div>
        <div className="mock-pill">PDF · Q&amp;A</div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Vamsi Krishna home">
          <span>VK</span> Vamsi Krishna
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-resume" href="/assets/Vamsi_Krishna_Resume.pdf" target="_blank" rel="noreferrer">
            <ArrowDownToLine size={16} /> Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Borra <span>Vamsi Krishna</span></h1>
            <h2>Frontend Developer <i aria-hidden="true">|</i> React Enthusiast</h2>
            <p className="hero-text">
              I'm a B.Tech Computer Science student interested in building responsive,
              user-friendly web applications. I enjoy turning ideas into interactive
              interfaces using React, JavaScript, HTML, and CSS.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact"><Mail size={16} /> Get in touch</a>
              <a className="button secondary" href="#projects"><Github size={17} /> View my work</a>
            </div>
            <div className="social-links">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={`mailto:${EMAIL}`}><Mail size={17} /> Email</a>
              {LINKEDIN && <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>}
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative developer code illustration">
            <div className="orb" />
            <div className="code-card">
              <div className="window-dots"><b /><b /><b /></div>
              <pre><code><span className="code-purple">const</span> developer = {'{'}{'\n'}  name: <span className="code-green">"Vamsi Krishna"</span>,{'\n'}  focus: <span className="code-green">"Frontend"</span>,{'\n'}  stack: [<span className="code-green">"React"</span>,{'\n'}          <span className="code-green">"JavaScript"</span>,{'\n'}          <span className="code-green">"HTML"</span>, <span className="code-green">"CSS"</span>],{'\n'}  mindset: <span className="code-green">"Always learning"</span>{'\n'}{'}'};</code></pre>
              <div className="code-foot">// Building one project at a time ✦</div>
            </div>
            <div className="floating-chip chip-one">React</div>
            <div className="floating-chip chip-two">CSS · JS</div>
          </div>
        </section>

        <section className="section-wrap split-section" id="about">
          <div className="about-block">
            <p className="section-kicker">A LITTLE ABOUT ME</p>
            <h2 className="section-title">Building useful things for the web.</h2>
            <p className="muted">
              I'm a third-year B.Tech Computer Science and Engineering student at
              R.V.R. &amp; J.C. College of Engineering, Guntur. My project experience
              includes a React frontend, REST API integration, and a document
              question-answering application.
            </p>
            <p className="muted">
              I'm focused on improving my frontend engineering skills and learning
              how to build accessible, maintainable interfaces.
            </p>
            <div className="mini-cards">
              <div className="mini-card">
                <span className="mini-icon"><GraduationCap size={20} /></span>
                <div><strong>B.Tech CSE</strong><small>Expected graduation: 2027</small></div>
              </div>
              <div className="mini-card">
                <span className="mini-icon"><MapPin size={20} /></span>
                <div><strong>Guntur, Andhra Pradesh</strong><small>India</small></div>
              </div>
            </div>
          </div>

          <div className="skills-block" id="skills">
            <p className="section-kicker">WHAT I WORK WITH</p>
            <h2 className="section-title">Skills &amp; tools</h2>
            <div className="skill-groups">
              {skills.map(({ title, icon: Icon, items }) => (
                <div className="skill-card" key={title}>
                  <h3><Icon size={17} /> {title}</h3>
                  <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
            <p className="note">TypeScript is not listed because I have not yet gained hands-on experience with it.</p>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">SELECTED WORK</p>
              <h2 className="section-title">Projects</h2>
            </div>
            <a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub profile <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <ProjectVisual type={project.visual} />
                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.category}</span>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
                  <div className="project-actions">
                    {project.demo && (
                      <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="note">
            Project visuals are illustrative. Replace them with screenshots of your running
            applications when available. Confirm every project claim and link before publishing.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="section-kicker">LET'S CONNECT</p>
              <h2 className="section-title">Have an opportunity or idea?</h2>
              <p className="muted">
                I'm open to connecting about frontend development, projects, and early-career opportunities.
              </p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}>
                <span><Mail size={20} /></span>
                <div><strong>Email me</strong><small>{EMAIL}</small></div>
                <b><ArrowUpRight size={16} /></b>
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <span><Github size={20} /></span>
                <div><strong>GitHub</strong><small>Explore my repositories</small></div>
                <b><ArrowUpRight size={16} /></b>
              </a>
              {LINKEDIN && (
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  <span><BriefcaseBusiness size={20} /></span>
                  <div><strong>LinkedIn</strong><small>Connect professionally</small></div>
                  <b><ArrowUpRight size={16} /></b>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-wrap footer-inner">
          <span>© {new Date().getFullYear()} Borra Vamsi Krishna</span>
          <span>Built with React + Vite</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
