"use client";

import Image from "next/image";
import { useState, useSyncExternalStore, type ReactNode } from "react";

const TrophyIcon = () => <svg className="trophy-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M14 7h20v10c0 7-4.4 12-10 12S14 24 14 17V7Z" /><path d="M14 11H7v4c0 5.1 3.1 8 8 8M34 11h7v4c0 5.1-3.1 8-8 8M24 29v8M17 41h14M19 37h10" /></svg>;

const JourneyIcon = () => <svg className="journey-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="22" cy="25" r="11" /><path d="M33 21l9 4-9 4M17 28c3-5 9-5 12-1M12 18l-6-3 3 7" /><circle cx="27" cy="21" r="1.6" /></svg>;

const PublicationIcon = () => <svg className="publication-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M15 6h13l7 7v29H15z" /><path d="M28 6v7h7M20 21h10M20 27h10M20 33h7" /></svg>;

const EducationIcon = () => <svg className="education-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 10 4 19l20 9 20-9z" /><path d="M12 23v9c0 3 5.4 6 12 6s12-3 12-6v-9M40 21v11" /></svg>;

const ProgrammingIcon = () => <svg className="programming-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M18 16 8 24l10 8M30 16l10 8-10 8M27 12l-6 24" /></svg>;

const ResumeIcon = () => <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h11l5 5v21H8zM19 3v6h5M12 16h8M12 21h8M12 11h3" /></svg>;

const menuItems: Array<{ key: string; label: string; icon: ReactNode; hint: string; href: string }> = [
  { key: "about", label: "about me", icon: "◉", hint: "", href: "/about" },
  { key: "achievements", label: "my achievements", icon: <TrophyIcon />, hint: "", href: "/achievements" },
  { key: "journey", label: "my journey", icon: <JourneyIcon />, hint: "", href: "/journey" },
  { key: "publications", label: "publications", icon: <PublicationIcon />, hint: "", href: "/publications" },
  { key: "education", label: "education", icon: <EducationIcon />, hint: "", href: "/education" },
  { key: "programming", label: "programming & engineering", icon: <ProgrammingIcon />, hint: "", href: "/programming" },
];

const subscribeToHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};

export default function Home() {
  const [startedByUser, setStartedByUser] = useState(false);
  const [menuDismissed, setMenuDismissed] = useState(false);
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => ""
  );
  const hasStarted = (startedByUser || hash === "#menu") && !menuDismissed;

  const startGame = () => {
    setMenuDismissed(false);
    setStartedByUser(true);
  };

  const backToTitle = () => {
    setMenuDismissed(true);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  };

  return (
    <main className={`retro-shell ${hasStarted ? "is-playing" : ""}`}>
      <div className="sky" aria-hidden="true"><i className="cloud cloud-one" /><i className="cloud cloud-two" /><i className="cloud cloud-three" /><span className="star star-one">✦</span><span className="star star-two">·</span><span className="star star-three">✦</span></div>
      <section className="hero" id="home">
        <div className="hero-copy"><h1>hii<span>!!</span></h1><p className="intro">I’m <strong>Shubhra Shukla</strong> - a curious mind who loves math and exploring new things.</p><div className="hero-actions"><button type="button" onClick={startGame} className="start-button">press start <b>→</b></button></div>
          <div className="hero-socials">
            <span className="socials-line" aria-hidden="true" />
            <div className="socials-row">
              <span className="socials-label">my socials!:</span>
              <a href="mailto:shubhra638@gmail.com" aria-label="Email Shubhra Shukla at shubhra638@gmail.com"><Image src="/icons/gmail.svg" alt="" width={26} height={26} unoptimized /></a>
              <a href="https://www.linkedin.com/in/shubhra-shukla-9957953b4/" target="_blank" rel="noopener noreferrer" aria-label="Shubhra Shukla on LinkedIn"><Image src="/icons/linkedin.svg" alt="" width={26} height={26} unoptimized /></a>
              <a href="https://github.com/PixelPandemonium-10" target="_blank" rel="noopener noreferrer" aria-label="Shubhra Shukla on GitHub"><Image src="/icons/github.svg" alt="" width={26} height={26} unoptimized /></a>
            </div>
            <a href="https://drive.google.com/file/d/1U4LtULiGJBVaH8Fl966uh8c530VWQF-9/view" target="_blank" rel="noopener noreferrer" className="resume-link" aria-label="Open Shubhra Shukla's resume">
              <ResumeIcon /> <span>resume</span><b>↗</b>
            </a>
          </div>
        </div>
        <div className="character-stage"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><Image className="hero-portrait" src="/portrait.png" alt="Portrait of Shubhra Shukla" width={218} height={229} priority unoptimized /><span className="stage-spark one">✦</span><span className="stage-spark two">✦</span><span className="stage-spark three">+</span></div>
      </section>
      <section className={`menu-section ${hasStarted ? "is-open" : ""}`} id="menu" aria-labelledby="menu-title" aria-hidden={!hasStarted}><div className="game-menu-top"><button className="menu-back" type="button" onClick={backToTitle}>← title screen</button><span>SELECT A PATH</span></div><div className="game-menu-panel"><div className="section-label"><h2 id="menu-title">choose your adventure</h2><span>click to explore</span></div><div className="menu-grid">{menuItems.map((item, index) => <a key={item.key} href={item.href} className={`menu-card card-${index + 1}`}><span className="card-index">0{index + 1}</span><span className="card-icon">{item.icon}</span><span className="card-label">{item.label}</span><span className="card-hint">{item.hint} <b>→</b></span></a>)}</div></div></section>
      <footer className="site-footer"><span>© SHUBHRA SHUKLA / 2026</span><div className="footer-links"><a href="/achievements">achievement archive ↗</a><a href="#home">back to title ↑</a></div></footer>
    </main>
  );
}
