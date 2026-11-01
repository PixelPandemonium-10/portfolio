import type { Metadata } from "next";
import Link from "next/link";
import SiteChain from "@/components/site-chain";

export const metadata: Metadata = {
  title: "Publications — Shubhra Shukla",
  description:
    "Two research manuscripts under preparation by Shubhra Shukla — one-shot language learning in a non-transformer cognitive architecture, and elliptic-curve cryptography under classical and quantum cryptanalysis.",
};

const manuscripts = [
  {
    index: "01",
    title:
      "Hear Bot – An Artificial Curiosity Engine for One-Shot Language Learning in a Non-transformer Cognitive Architecture",
    status: "Manuscript under preparation",
    description:
      "Research exploring an artificial curiosity engine for one-shot language learning through a non-transformer cognitive architecture.",
    categories: ["Artificial Intelligence", "Computational Learning"],
  },
  {
    index: "02",
    title:
      "Effect of Small Finite Field Properties of Elliptic Curves on ECC – Classical and Quantum Cryptanalytic Consequences",
    status: "Manuscript under preparation",
    description:
      "Research examining the properties of small finite fields in elliptic-curve cryptography and their classical and quantum cryptanalytic implications.",
    categories: ["Cryptography", "Mathematics"],
  },
];

export default function PublicationsPage() {
  return (
    <main className="archive-page game-archive publications-page">
      <header className="archive-header">
        <Link href="/#menu" className="archive-back">← menu</Link>
        <p>PUBLICATIONS MODE <span>/ research</span></p>
        <span className="archive-count">{manuscripts.length} MANUSCRIPTS</span>
      </header>

      <section className="archive-hero">
        <div>
          <p className="archive-kicker">MANUSCRIPT DESK</p>
          <h1>Research,<br /><em>in progress.</em></h1>
          <p className="archive-intro">Two manuscripts I’m currently writing.</p>
        </div>
        <p className="archive-aside">STATUS<br /><span>both in preparation</span> ↓</p>
      </section>

      <section className="pub-section" aria-label="Research manuscripts">
        <ol className="pub-list">
          {manuscripts.map((manuscript) => (
            <li className="pub-entry" key={manuscript.index}>
              <p className="pub-meta">
                <span>{manuscript.index} / MANUSCRIPT</span>
                <span className="pub-status">{manuscript.status}</span>
              </p>
              <h2 className="pub-title">{manuscript.title}</h2>
              <p className="pub-desc">{manuscript.description}</p>
              <ul className="pub-tags">
                {manuscript.categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <footer className="archive-footer">
        <Link href="/#menu">← back to the menu</Link>
        <SiteChain current="/publications" />
      </footer>
    </main>
  );
}
