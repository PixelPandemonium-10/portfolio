import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteChain from "@/components/site-chain";

export const metadata: Metadata = {
  title: "Programming & Engineering - Shubhra Shukla",
  description:
    "Languages, tools, libraries, and software projects of Shubhra Shukla - including Pulse-v9.6 and Ghost Run.",
};

type TechItem = { name: string; icon?: string; wide?: boolean };

const languageGroups: { label: string; items: TechItem[] }[] = [
  {
    label: "Programming languages",
    items: [
      { name: "Python", icon: "python.svg" },
      { name: "C++", icon: "cplusplus.svg" },
      { name: "C", icon: "c.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
    ],
  },
  {
    label: "Web technologies",
    items: [
      { name: "HTML5", icon: "html5.svg" },
      { name: "CSS", icon: "css.svg" },
    ],
  },
  {
    label: "Technical & creative tools",
    items: [
      { name: "LaTeX", icon: "latex.svg" },
      { name: "Canva", icon: "canva.svg", wide: true },
    ],
  },
];

const libraries: TechItem[] = [
  { name: "PyTorch", icon: "pytorch.svg" },
  { name: "Hugging Face Transformers", icon: "huggingface.svg" },
  { name: "Scikit-learn", icon: "scikitlearn.svg" },
  { name: "XGBoost" },
  { name: "LightGBM" },
  { name: "NumPy", icon: "numpy.svg" },
  { name: "Pandas", icon: "pandas.svg" },
  { name: "Sentence Transformers" },
];

const projects = [
  {
    id: "pulse",
    index: "PROJECT 01",
    title: "Pulse-v9.6",
    tagline: "Precision rhythm game with a statistical soul.",
    description:
      "A precision rhythm game that adapts its difficulty based on the player’s reaction-time distribution.",
    stack: ["HTML5", "JavaScript", "CSS", "Canva"],
    highlights: [
      "Dynamically adapts difficulty using reaction-time measurements.",
      "Fits a log-normal maximum-likelihood estimate over regime-tagged samples.",
      "Uses slow/fast regimes with 60 ms hysteresis to prevent flickering.",
      "Determines the timing window using the empirical 85th percentile of the last 20 in-regime magnitudes.",
      "Adjusts BPM according to timing-window tightness: narrower windows increase difficulty, while wider windows reduce it.",
    ],
  },
  {
    id: "ghost",
    index: "PROJECT 02",
    title: "Ghost Run",
    tagline: "A browser-based endless runner.",
    description:
      "A browser-based endless runner in which players dash through a rainy, neon-lit cityscape as a ghost, avoiding obstacles and chasing high scores.",
    stack: ["HTML5", "JavaScript", "CSS"],
    highlights: [
      "Responsive jump mechanics with a smooth gravity-driven arc.",
      "Fast running animation.",
      "Dynamic body tilt during movement.",
      "Obstacle avoidance and endless-runner gameplay.",
    ],
  },
];

const interests = [
  "Interactive Software",
  "Browser Game Development",
  "Machine Learning",
  "Data Science",
  "Applied Programming",
  "Computational Mathematics",
];

const techCount = languageGroups.reduce((sum, group) => sum + group.items.length, 0) + libraries.length;

export default function ProgrammingPage() {
  return (
    <main className="archive-page game-archive programming-page">
      <header className="archive-header">
        <Link href="/#menu" className="archive-back">← menu</Link>
        <p>PROGRAMMING MODE <span>/ engineering</span></p>
        <span className="archive-count">{techCount} TECHNOLOGIES</span>
      </header>

      <section className="archive-hero prog-hero">
        <div>
          <p className="archive-kicker">DEV CONSOLE</p>
          <h1>Programming<br /><em>&amp; Engineering.</em></h1>
          <p className="archive-intro">
            I enjoy building software, experimenting with technology, and
            turning ideas into working projects - from interactive browser
            games to data-driven systems.
          </p>
          <p className="prog-terminal" aria-hidden="true">
            <span className="prog-prompt">$</span> building ideas into software
            <i className="prog-caret" />
          </p>
        </div>
        <p className="archive-aside">BUILD LOG<br /><span>languages · libraries · projects</span> ↓</p>
      </section>

      <section className="prog-section prog-grid-bg" aria-label="Languages and technologies">
        <div className="prog-inner">
          <h2 className="prog-heading">Languages &amp; Technologies</h2>
          {languageGroups.map((group) => (
            <div className="prog-group" key={group.label}>
              <p className="prog-group-label">{group.label}</p>
              <ul className="prog-tiles">
                {group.items.map((item) => (
                  <li className="prog-tile" key={item.name}>
                    <Image
                      className={`prog-icon${item.wide ? " is-wide" : ""}`}
                      src={`/icons/${item.icon}`}
                      alt=""
                      aria-hidden="true"
                      width={item.wide ? 80 : 38}
                      height={item.wide ? 30 : 38}
                      unoptimized
                    />
                    <span className="prog-tile-name">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="prog-section prog-section-alt" aria-label="Libraries and technical ecosystem">
        <div className="prog-inner">
          <h2 className="prog-heading">Libraries &amp; Technical Ecosystem</h2>
          <ul className="lib-grid">
            {libraries.map((library) => (
              <li className="lib-item" key={library.name}>
                {library.icon ? (
                  <Image className="lib-icon" src={`/icons/${library.icon}`} alt="" aria-hidden="true" width={22} height={22} unoptimized />
                ) : null}
                <span>{library.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="prog-section proj-section" aria-label="Selected projects">
        <div className="prog-inner">
          <h2 className="prog-heading">Selected Projects</h2>
          <div className="proj-grid">
            {projects.map((project) => (
              <article className="proj-card" key={project.id}>
                {project.id === "pulse" ? (
                  <div className="proj-band proj-band-pulse" aria-hidden="true">
                    <svg className="pulse-wave" viewBox="0 0 420 110" preserveAspectRatio="none" aria-hidden="true">
                      <path className="pulse-wave-base" d="M0 64 H90 l12 -30 l10 56 l12 -44 l9 30 l8 -12 H220 l10 -22 l10 42 l11 -34 l9 22 l7 -8 H420" />
                      <path className="pulse-wave-run" d="M0 64 H90 l12 -30 l10 56 l12 -44 l9 30 l8 -12 H220 l10 -22 l10 42 l11 -34 l9 22 l7 -8 H420" />
                    </svg>
                  </div>
                ) : (
                  <div className="proj-band proj-band-ghost" aria-hidden="true" />
                )}
                <div className="proj-body">
                  <p className="proj-index">{project.index}</p>
                  <h3>{project.title}</h3>
                  <p className="proj-tagline">{project.tagline}</p>
                  <p className="proj-desc">{project.description}</p>
                  <ul className="proj-stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <p className="proj-label">TECHNICAL HIGHLIGHTS</p>
                  <ul className="proj-points">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prog-section" aria-label="Technical interests">
        <div className="prog-inner">
          <h2 className="prog-heading">Technical Interests</h2>
          <ul className="interest-row">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="archive-footer">
        <Link href="/#menu">← back to the menu</Link>
        <SiteChain current="/programming" />
      </footer>
    </main>
  );
}
