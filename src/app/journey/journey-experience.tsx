"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { chapters, pipeSegments, stops } from "./stops";

type Phase = "intro" | "transition" | "timeline";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollBehavior = (): ScrollBehavior => (prefersReduced() ? "instant" : "smooth");

const pad = (n: number) => String(n).padStart(2, "0");

function Bird({ idle = false }: { idle?: boolean }) {
  return (
    <svg className={`bird-svg${idle ? " bird-idle" : ""}`} viewBox="0 0 52 36" aria-hidden="true">
      <path className="bird-tail" d="M15 12 L5 9 L9 18 L5 26 L15 22 Z" />
      <ellipse className="bird-body" cx="27" cy="19" rx="16" ry="12.5" />
      <ellipse className="bird-wing" cx="23" cy="22" rx="7.5" ry="5" />
      <circle className="bird-eye" cx="35" cy="14" r="4.5" />
      <circle className="bird-pupil" cx="36.4" cy="14" r="1.7" />
      <path className="bird-beak" d="M40 16 L51 20.5 L40 25 Z" />
      <path className="bird-mouth" d="M41 20.5 L49.5 20.5" />
    </svg>
  );
}

export default function JourneyExperience() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [active, setActive] = useState(0);
  const [flapping, setFlapping] = useState(false);
  const [arriving, setArriving] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const lockRef = useRef(0);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    for (const id of timersRef.current) window.clearTimeout(id);
    timersRef.current = [];
  };
  useEffect(() => clearTimers, []);

  const scrollToStop = (index: number, smooth: boolean) => {
    const stop = stops[index];
    if (!stop) return;
    const el = document.getElementById(`stop-${stop.id}`);
    if (!el) return;
    lockRef.current = Date.now() + (smooth ? 950 : 0);
    el.scrollIntoView({ behavior: smooth ? scrollBehavior() : "instant", block: "start" });
  };

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(stops.length - 1, index));
    setActive(next);
    setAtEnd(false);
    setFlapping(true);
    timersRef.current.push(window.setTimeout(() => setFlapping(false), 700));
    scrollToStop(next, true);
  };

  const startJourney = () => {
    if (prefersReduced()) {
      setPhase("timeline");
      return;
    }
    setPhase("transition");
    timersRef.current.push(
      window.setTimeout(() => {
        setPhase("timeline");
        setArriving(true);
        timersRef.current.push(window.setTimeout(() => setArriving(false), 700));
        const heading = document.getElementById(`stop-title-${stops[0].id}`);
        heading?.focus({ preventScroll: true });
        scrollToStop(0, false);
      }, 1500),
    );
  };

  const backToTop = () => {
    setAtEnd(false);
    setActive(0);
    lockRef.current = Date.now() + 950;
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };

  // Keep the active stop in sync when the visitor scrolls on their own.
  useEffect(() => {
    if (phase !== "timeline") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockRef.current) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target.id === "journey-complete") {
            setAtEnd(true);
            continue;
          }
          const index = stops.findIndex((stop) => `stop-${stop.id}` === entry.target.id);
          if (index >= 0) {
            setActive(index);
            setAtEnd(false);
          }
        }
      },
      { rootMargin: "-42% 0px -44% 0px", threshold: 0 },
    );
    for (const stop of stops) {
      const el = document.getElementById(`stop-${stop.id}`);
      if (el) observer.observe(el);
    }
    const end = document.getElementById("journey-complete");
    if (end) observer.observe(end);
    return () => observer.disconnect();
  }, [phase]);

  // Arrow-key travel between stops.
  useEffect(() => {
    if (phase !== "timeline") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      let next = active;
      if (event.key === "ArrowDown" || event.key === "PageDown") next = Math.min(stops.length - 1, active + 1);
      else if (event.key === "ArrowUp" || event.key === "PageUp") next = Math.max(0, active - 1);
      else return;
      if (next === active) return; // at the edge — let the page scroll normally
      event.preventDefault();
      goTo(next);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, active]);

  const hudIndex = atEnd ? stops.length - 1 : active;
  const chapter = chapters[stops[hudIndex].chapter - 1];
  const introOpen = phase !== "timeline";

  return (
    <main className={`archive-page journey-page${introOpen ? " is-intro" : ""}`}>
      <header className="archive-header">
        <Link href="/" className="archive-back">← home</Link>
        <p>JOURNEY MODE <span>/ 2023—26</span></p>
        <span className="archive-count">{stops.length} STOPS</span>
      </header>

      <div className="journey-sky" aria-hidden="true">
        <div className="sky-layer sky-layer-back">
          <i className="j-cloud c1" /><i className="j-cloud c2" /><i className="j-cloud c3" />
        </div>
        <div className="sky-layer sky-layer-front">
          <i className="j-cloud c4" /><i className="j-cloud c5" /><i className="j-cloud c6" />
        </div>
      </div>

      <div className={`journey-stage${phase === "timeline" ? " is-visible" : ""}`} inert={introOpen}>
        <aside className="journey-rail" aria-label="Pipe timeline index">
          <div className="pipe">
            {pipeSegments.map(([a, b]) => (
              <span
                key={`${a}-${b}`}
                className="pipe-seg"
                aria-hidden="true"
                style={{ "--a": `${a}%`, "--b": `${b}%` } as React.CSSProperties}
              />
            ))}
            <span className="pipe-rim pipe-mouth" aria-hidden="true" />
            <span className="pipe-rim pipe-foot" aria-hidden="true" />
            {stops.map((stop, index) => (
              <Fragment key={stop.id}>
                <span className="pipe-rim rim-a" aria-hidden="true" style={{ "--pos": `${stop.railTop}%` } as React.CSSProperties} />
                <span className="pipe-rim rim-b" aria-hidden="true" style={{ "--pos": `${stop.railTop}%` } as React.CSSProperties} />
                <button
                  type="button"
                  className={`pipe-marker${index === active ? " is-active" : ""}`}
                  style={{ "--pos": `${stop.railTop}%` } as React.CSSProperties}
                  onClick={() => goTo(index)}
                  aria-label={`Jump to ${stop.org} — ${stop.date}`}
                  aria-current={index === active ? "true" : undefined}
                >
                  <span className="marker-date">{stop.tick}</span>
                </button>
              </Fragment>
            ))}
            <span
              className={`pipe-bird${flapping ? " is-flapping" : ""}${arriving ? " is-arriving" : ""}`}
              aria-hidden="true"
              style={{ "--bp": `${stops[active].railTop}%` } as React.CSSProperties}
            >
              <Bird />
            </span>
          </div>
        </aside>

        <div className="journey-track">
          <div className="journey-head">
            <p className="archive-kicker">THE PIPE IS THE TIMELINE</p>
            <h1>My journey,<br /><em>jump by jump.</em></h1>
            <p className="journey-lede">Every experience has a story. Let’s travel through mine.</p>
          </div>

          {stops.map((stop, index) => {
            const prev = stops[index - 1];
            const showChapter = !prev || prev.chapter !== stop.chapter;
            const chapterData = chapters[stop.chapter - 1];
            return (
              <Fragment key={stop.id}>
                {showChapter ? (
                  <h2 className="journey-chapter" id={`chapter-${chapterData.no}`}>
                    <span>CHAPTER {chapterData.no}</span>
                    <span>{chapterData.span} · {chapterData.title}</span>
                  </h2>
                ) : null}
                <section
                  className={`journey-stop${index === active ? " is-active" : ""}${stop.tidder ? " stop-tidder" : ""}`}
                  id={`stop-${stop.id}`}
                  aria-labelledby={`stop-title-${stop.id}`}
                >
                  <p className="stop-date">{stop.date}</p>
                  <h3 className="stop-org" id={`stop-title-${stop.id}`} tabIndex={-1}>
                    {stop.org}
                  </h3>
                  <p className="stop-role">{stop.role}</p>

                  {stop.tidder ? (
                    <>
                      <p className="tidder-headline">{stop.tidder.headline}</p>
                      <p className="stop-narrative"><strong>{stop.tidder.copy}</strong> {stop.narrative}</p>
                    </>
                  ) : (
                    <p className="stop-narrative">{stop.narrative}</p>
                  )}

                  {stop.background ? <p className="stop-background">{stop.background}</p> : null}

                  {stop.points.length > 0 ? (
                    <ul className="stop-points">
                      {stop.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  ) : null}

                  {stop.metrics ? (
                    <div className="stop-metrics">
                      <p className="metrics-label">BUSINESS PERFORMANCE</p>
                      <div className="metrics-grid">
                        {stop.metrics.map((metric) => (
                          <div className="metric" key={metric.period}>
                            <span className="metric-period">{metric.period}</span>
                            <dl>
                              <div><dt>Sales</dt><dd>{metric.sales}</dd></div>
                              <div><dt>Profit</dt><dd>{metric.profit}</dd></div>
                            </dl>
                          </div>
                        ))}
                      </div>
                      <p className="metrics-note">{stop.metricsNote}</p>
                    </div>
                  ) : null}

                  {stop.chips ? (
                    <div className="stop-chip-groups">
                      {stop.chips.map((group) => (
                        <div key={group.label}>
                          <p className="chip-label">{group.label}</p>
                          <ul className="stop-chips">
                            {group.items.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {stop.tidder ? (
                    <div className="tidder-block">
                      <p className="chip-label">KEY CONCEPTS</p>
                      <ul className="stop-points">
                        {stop.tidder.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                      <p className="chip-label">SUPPORTED PROVIDERS</p>
                      <ul className="stop-chips stop-chips-dark">
                        {stop.tidder.providers.map((provider) => <li key={provider}>{provider}</li>)}
                      </ul>
                    </div>
                  ) : null}

                  {stop.tags ? (
                    <ul className="stop-chips">
                      {stop.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  ) : null}

                  {stop.quote ? <p className="stop-quote">{stop.quote}</p> : null}

                  <nav className="stop-actions" aria-label={`Navigation for ${stop.org}`}>
                    {index > 0 ? (
                      <button type="button" className="achievement-button jump-back" onClick={() => goTo(index - 1)}>
                        ← BACK JUMP
                      </button>
                    ) : (
                      <span className="stop-actions-spacer" aria-hidden="true" />
                    )}
                    {index < stops.length - 1 ? (
                      <button type="button" className="start-button" onClick={() => goTo(index + 1)}>
                        NEXT JUMP <b>→</b>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="start-button"
                        onClick={() => {
                          lockRef.current = Date.now() + 950;
                          document.getElementById("journey-complete")?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
                        }}
                      >
                        FINISH THE FLIGHT <b>↓</b>
                      </button>
                    )}
                  </nav>
                </section>
              </Fragment>
            );
          })}
        </div>
      </div>

      <section className="journey-complete" id="journey-complete" aria-labelledby="complete-title">
        <div className="complete-scene" aria-hidden="true">
          <span className="stub-pipe" />
          <span className="stub-bird"><Bird idle /></span>
        </div>
        <h2 id="complete-title">AND THAT’S WHERE<br />THE JOURNEY STANDS.</h2>
        <p>
          Every experience leaves something behind — a skill, a perspective, a
          lesson, or another idea worth building.
        </p>
        <div className="about-actions">
          <button type="button" className="achievement-button" onClick={backToTop}>BACK TO TOP ↑</button>
          <Link href="/" className="achievement-button">BACK HOME ↗</Link>
        </div>
      </section>

      <footer className="archive-footer">
        <Link href="/">← back to the main world</Link>
        <span>© SHUBHRA SHUKLA / 2026</span>
      </footer>

      <div className="journey-hud" hidden={phase !== "timeline"}>
        <span className="hud-count">{pad(hudIndex + 1)} / {pad(stops.length)}</span>
        <span className="hud-chapter">— {chapter.title}</span>
        <div className="hud-buttons">
          <button
            type="button"
            onClick={() => (atEnd ? goTo(stops.length - 1) : goTo(active - 1))}
            disabled={!atEnd && active === 0}
            aria-label="Previous experience"
          >↑</button>
          <button
            type="button"
            onClick={() => (active === stops.length - 1 ? undefined : goTo(active + 1))}
            disabled={active === stops.length - 1}
            aria-label="Next experience"
          >↓</button>
        </div>
      </div>

      {introOpen ? (
        <div className={`journey-intro${phase === "transition" ? " is-leaving" : ""}`}>
          <div className="intro-sky" aria-hidden="true">
            <i className="j-cloud c1" /><i className="j-cloud c2" /><i className="j-cloud c5" />
          </div>
          <span className="intro-pipe" aria-hidden="true">
            <i className="intro-pipe-body" />
            <i className="intro-pipe-cap" />
            <i className="intro-pipe-rim rim-top" />
            <i className="intro-pipe-rim rim-bottom" />
            <i className="intro-pipe-cap intro-pipe-cap-bottom" />
          </span>
          <div className="intro-bird"><Bird idle /></div>
          <div className="intro-inner">
            <p className="intro-text">Hey! Ready to explore my journey?</p>
            <button type="button" className="start-button intro-start" onClick={startJourney}>
              LET’S JUMP IN <b>→</b>
            </button>
            <p className="intro-note">{stops.length} stops · {chapters.length} chapters · 2023 — 2026</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
