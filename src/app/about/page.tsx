import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Shubhra Shukla",
  description:
    "A student who likes math competitions, writes code in C++, Python, and JavaScript, and works on games, physics, and small businesses.",
};

const profileFacts = [
  { label: "FOCUS", value: "Combinatorics · Geometry · Number theory" },
  { label: "TOOLKIT", value: "C++ · Python · JavaScript" },
  { label: "TRAINING", value: "Dr. Evan Chen's OTIS program" },
  { label: "CURIOSITY", value: "Physics · research · startups" },
];

const interests = [
  { index: "01", name: "Combinatorics", note: "counting & structure" },
  { index: "02", name: "Geometry", note: "figures & proofs" },
  { index: "03", name: "Number theory", note: "patterns & primes" },
];

const chapters = [
  {
    id: "engineering",
    label: "CHAPTER 02 / ENGINEERING",
    title: (
      <>
        Things I
        <br />
        <em>build.</em>
      </>
    ),
    copy: "I write software in C++, Python, and JavaScript — games, tools, small experiments. Most of them start as a question from math or physics and end up as something you can click.",
  },
  {
    id: "research",
    label: "CHAPTER 03 / PHYSICS & RESEARCH",
    title: (
      <>
        Still
        <br />
        <em>curious.</em>
      </>
    ),
    copy: "Physics is where my math gets tested against something real. I like the part where math, computation, and physics overlap, and I’d like to work in research at some point.",
  },
];

export default function AboutPage() {
  return (
    <main className="archive-page game-archive about-page">
      <header className="archive-header">
        <Link href="/" className="archive-back">← home</Link>
        <p>ABOUT MODE</p>
      </header>

      <section className="archive-hero about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <p className="archive-kicker">CHARACTER SHEET</p>
          <h1 id="about-title">Shubhra<br /><em>Shukla.</em></h1>
          <p className="archive-intro">
            I’m a student who likes math, and I’ve taken part in national and
            international competitions. The rest of the time I write code,
            build games, study physics, and work on businesses and startups.
          </p>
          <span className="about-dash" aria-hidden="true" />
        </div>

        <div className="about-hero-side">
          <article className="profile-card">
            <div className="profile-figure">
              <svg viewBox="0 0 260 180" role="img">
                <title>A right triangle inscribed in a circle</title>
                <circle className="figure-ring" cx="130" cy="90" r="70" />
                <line className="figure-diameter" x1="130" y1="20" x2="130" y2="160" />
                <path className="figure-triangle" d="M130 20 L190.6 55 L130 160" />
                <path className="figure-angle" d="M179.4 48.5 L172.9 59.8 L184.1 66.3" />
                <circle className="figure-center" cx="130" cy="90" r="4.5" />
                <circle className="figure-node figure-mint" cx="130" cy="20" r="6" />
                <circle className="figure-node figure-yellow" cx="130" cy="160" r="6" />
                <circle className="figure-node figure-pink" cx="190.6" cy="55" r="6" />
              </svg>
            </div>

            <ul className="profile-tags">
              <li>Mathematics</li>
              <li>Software</li>
              <li>Physics</li>
              <li>Startups</li>
            </ul>

            <p className="profile-card-foot">
              <span>INDIA</span>
              <span>LEARNING BY MAKING</span>
            </p>
          </article>

          <p className="archive-aside">READ ON<br /><span>one chapter at a time</span> ↓</p>
        </div>
      </section>

      <section className="about-loadout" aria-label="Profile facts">
        <dl className="about-loadout-inner">
          {profileFacts.map((fact) => (
            <div className="about-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="about-chapters">
        <section className="about-chapters-inner" aria-labelledby="math-title">
          <p className="archive-kicker">CHAPTER 01 / MATHEMATICS</p>
          <h2 className="about-title" id="math-title">Math,<br /><em>mostly.</em></h2>
          <div className="about-feature-cols">
            <p>
              Most of my time with math goes into problem solving —
              olympiad-style contests, national and international ones.
            </p>
            <p>
              Training in Dr. Evan Chen’s OTIS program got me deeper into the
              parts I like most: combinatorics, geometry, and number theory. I
              like a problem more when there’s a simple idea hiding inside it.
            </p>
          </div>

          <ul className="about-interests">
            {interests.map((interest) => (
              <li key={interest.index}>
                <span className="about-interest-index">{interest.index}</span>
                <h3>{interest.name}</h3>
                <p>{interest.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="about-chapters-inner about-chapters-more">
          <hr className="about-rule" />
          <div className="about-chapter-pair">
            {chapters.map((chapter) => (
              <section className="about-chapter" key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
                <p className="archive-kicker">{chapter.label}</p>
                <h2 className="about-title" id={`${chapter.id}-title`}>{chapter.title}</h2>
                <p className="about-chapter-copy">{chapter.copy}</p>
              </section>
            ))}
          </div>

          <section className="about-chapter about-chapter-wide" aria-labelledby="startup-title">
            <div>
              <p className="archive-kicker">CHAPTER 04 / ENTREPRENEURSHIP</p>
              <h2 className="about-title" id="startup-title">Ideas that<br /><em>ship.</em></h2>
            </div>
            <div>
              <p className="about-chapter-copy">
                Businesses and startups are how I check ideas against people
                instead of against problem sets. I like the whole thing:
                noticing something annoying, sketching the smallest fix, building
                it, and seeing if anyone actually uses it.
              </p>
              <p className="about-quote">
                Still learning the business side as I go.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="about-continue" aria-labelledby="continue-title">
        <h2 id="continue-title">Anyway,<br /><em>that’s me.</em></h2>
        <p className="about-continue-copy">
          A curious builder with a soft spot for tiny details — that’s the
          short version.
        </p>
        <div className="about-actions">
          <Link href="/achievements" className="achievement-button">open the achievement archive ↗</Link>
          <Link href="/" className="achievement-button">← title screen</Link>
        </div>
        <p className="about-footnote">* cats remain an excellent source of creative direction</p>
      </section>

      <footer className="archive-footer about-footer">
        <Link href="/">← back to the main world</Link>
        <span>© SHUBHRA SHUKLA / 2026</span>
      </footer>
    </main>
  );
}
