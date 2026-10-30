"use client";

import { useEffect, useState, type ReactNode } from "react";

type MenuKey = "joke";

const TrophyIcon = () => <svg className="trophy-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M14 7h20v10c0 7-4.4 12-10 12S14 24 14 17V7Z" /><path d="M14 11H7v4c0 5.1 3.1 8 8 8M34 11h7v4c0 5.1-3.1 8-8 8M24 29v8M17 41h14M19 37h10" /></svg>;

const menuItems: Array<{ key: MenuKey | "about" | "achievements"; label: string; icon: ReactNode; hint: string; href?: string }> = [
  { key: "about", label: "about me", icon: "◉", hint: "player profile", href: "/about" },
  { key: "achievements", label: "my achievements", icon: <TrophyIcon />, hint: "open archive", href: "/achievements" },
  { key: "joke", label: "tell me a joke", icon: "?", hint: "bonus level" },
];

const menuContent: Record<MenuKey, { kicker: string; title: string; copy: string; details: string[]; action?: string }> = {
  joke: { kicker: "BONUS LEVEL / JOKE", title: "Why did the student bring a ladder to the math competition?", copy: "Because the problems were on another level.", details: ["I’ll see myself out now.", "Thanks for humouring the resident pixel cat.", "Try the achievement archive for the serious stuff."] },
};

function PixelSparkle() { return <span className="pixel-sparkle" aria-hidden="true">✦</span>; }

export default function Home() {
  const [active, setActive] = useState<MenuKey | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const content = active ? menuContent[active] : null;

  const startGame = () => {
    setHasStarted(true);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className={`retro-shell ${hasStarted ? "is-playing" : ""}`}>
      <div className="sky" aria-hidden="true"><i className="cloud cloud-one" /><i className="cloud cloud-two" /><i className="cloud cloud-three" /><span className="star star-one">✦</span><span className="star star-two">·</span><span className="star star-three">✦</span></div>
      <section className="hero" id="home">
        <div className="hero-copy"><h1>hii<span>!!</span></h1><p className="intro">I’m <strong>Shubhra Shukla</strong> — a curious creator making playful things for the web.</p><div className="hero-actions"><button type="button" onClick={startGame} className="start-button">press start <b>→</b></button></div></div>
        <div className="character-stage" aria-label="A smiling pixel cat companion"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="pixel-cat" aria-hidden="true"><span className="cat-ear left" /><span className="cat-ear right" /><span className="cat-face"><i className="cat-eye left" /><i className="cat-eye right" /><i className="cat-nose" /><i className="cat-mouth" /></span><span className="cat-body" /><span className="cat-tail" /></div><span className="stage-spark one">✦</span><span className="stage-spark two">✦</span><span className="stage-spark three">+</span></div>
      </section>
      <section className={`menu-section ${hasStarted ? "is-open" : ""}`} id="menu" aria-labelledby="menu-title" aria-hidden={!hasStarted}><div className="game-menu-top"><button className="menu-back" type="button" onClick={() => setHasStarted(false)}>← title screen</button><span>SELECT A PATH</span></div><div className="game-menu-panel"><div className="section-label"><h2 id="menu-title">choose your adventure</h2><span>use arrows or click</span></div><div className="menu-grid">{menuItems.map((item, index) => item.href ? <a key={item.key} href={item.href} className={`menu-card card-${index + 1}`}><span className="card-index">0{index + 1}</span><span className="card-icon">{item.icon}</span><span className="card-label">{item.label}</span><span className="card-hint">{item.hint} <b>→</b></span></a> : <button key={item.key} type="button" className={`menu-card card-${index + 1}`} onClick={() => setActive(item.key as MenuKey)}><span className="card-index">0{index + 1}</span><span className="card-icon">{item.icon}</span><span className="card-label">{item.label}</span><span className="card-hint">{item.hint} <b>→</b></span></button>)}</div></div></section>
      <footer className="site-footer"><span>© SHUBHRA SHUKLA / 2026</span><div className="footer-links"><a href="/achievements">achievement archive ↗</a><a href="#home">back to title ↑</a></div></footer>
      {content && active ? <div className="retro-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}><article className="retro-card"><button className="close-button" type="button" onClick={() => setActive(null)} aria-label="Close">×</button><p className="modal-kicker">{content.kicker}</p><div className="modal-symbol">{menuItems.find((item) => item.key === active)?.icon}</div><h2 id="modal-title">{content.title}</h2><p className="modal-copy">{content.copy}</p><ul>{content.details.map((detail) => <li key={detail}><PixelSparkle /> {detail}</li>)}</ul>{content.action ? <a className="modal-action" href="mailto:hello@shubhrashukla.dev">{content.action} <b>→</b></a> : null}<button type="button" className="back-button" onClick={() => setActive(null)}>← back to menu</button></article></div> : null}
    </main>
  );
}
