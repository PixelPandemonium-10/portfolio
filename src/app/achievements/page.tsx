import Image from "next/image";
import Link from "next/link";
import SiteChain from "@/components/site-chain";

const certificates = [
  { file: "01_AMC12_2025_Distinction_top5pct_a.jpeg", title: "AMC 12 — Distinguished Honor Roll", note: "Top 5% · 2025" },
  { file: "03_AIME_2025_Excellence_a.jpeg", title: "AIME — Excellence", note: "2025" },
  { file: "05_AIME_2026_Participation.jpeg", title: "American Invitational Mathematics Examination", note: "2026" },
  { file: "06_AIME_II_2026_ScoreSheet.jpeg", title: "AIME II — Score Sheet", note: "2026" },
  { file: "07_Stanford_SMT_2026_Algebra_DistinguishedHM.jpeg", title: "Stanford Math Tournament — Algebra", note: "Distinguished Honorable Mention · 2026" },
  { file: "08_Stanford_SMT_2026_Team_DistinguishedHM.jpeg", title: "Stanford Math Tournament — Team", note: "Distinguished Honorable Mention · 2026" },
  { file: "09_PurpleComet_2026_Participation.jpeg", title: "Purple Comet! Math Meet", note: "2026" },
  { file: "10_LIMIT_ISI_2026_Participation.jpeg", title: "LIMIT x ISI Mathematics Competition", note: "2026" },
  { file: "11_OPhO_2026_Participation.jpeg", title: "OPhO — Olympiad in Physics", note: "2026" },
  { file: "12_YIMO_2026_Participation_a.jpeg", title: "YIMO — Participation", note: "2026" },
  { file: "14_YIMO_2026_Finalist.jpeg", title: "YIMO — Finalist", note: "2026" },
  { file: "16_YIMO_2026_Gold_b.jpeg", title: "YIMO — Gold Award", note: "2026" },
  { file: "17_AMTI_NMTC_2026_Top10pct.jpeg", title: "AMTI NMTC", note: "Top 10% · 2026" },
  { file: "18_UKMT_SMC_2026_Gold.jpeg", title: "UKMT Senior Mathematical Challenge", note: "Gold · 2026" },
  { file: "20_NeuroTitan_SchoolAmbassador_b.jpeg", title: "NeuroTitan — School Ambassador", note: "Community leadership" },
  { file: "21_NSRI_Ambassador.jpeg", title: "NSRI Ambassador", note: "Community leadership" },
];

const archivePreview = certificates.slice(0, 4);

export default function AchievementsPage() {
  return (
    <main className="archive-page game-archive">
      <header className="archive-header">
        <Link href="/#menu" className="archive-back">← menu</Link>
        <p>ACHIEVEMENT MODE <span>/ 2024—26</span></p>
        <span className="archive-count">{certificates.length} ITEMS FOUND</span>
      </header>

      <section className="archive-hero">
        <div>
          <p className="archive-kicker">ACHIEVEMENT VAULT</p>
          <h1>Achievement<br /><em>unlocked.</em></h1>
          <p className="archive-intro">A collection of the challenges, teams, and problems that kept me moving forward.</p>
        </div>
        <p className="archive-aside">OPEN THE VAULT<br /><span>to reveal the loot</span> ↓</p>
      </section>

      <section className="folder-section" aria-labelledby="folder-title">
        <details className="certificate-folder">
          <summary aria-labelledby="folder-title">
            <span className="folder-back"><span className="folder-tab">2024—26</span></span>
            <span className="folder-paper folder-paper-one"><Image src={`/certs/${archivePreview[0].file}`} alt="" fill sizes="190px" /></span>
            <span className="folder-paper folder-paper-two"><Image src={`/certs/${archivePreview[1].file}`} alt="" fill sizes="190px" /></span>
            <span className="folder-paper folder-paper-three"><Image src={`/certs/${archivePreview[2].file}`} alt="" fill sizes="190px" /></span>
            <span className="folder-paper folder-paper-four"><Image src={`/certs/${archivePreview[3].file}`} alt="" fill sizes="190px" /></span>
            <span className="folder-front"><b>CERTIFICATE<br />VAULT</b><small id="folder-title">tap to open the loot</small><i>★</i></span>
          </summary>
        </details>
        <p className="folder-caption">Each page marks a challenge accepted, a problem explored, or a team I learned with.</p>
      </section>

      <section className="album-section" id="album" aria-labelledby="album-title">
        <div className="album-heading"><p>INVENTORY / COMPLETE COLLECTION · {certificates.length} ITEMS</p><h2 id="album-title">Proof of<br />play <em>unlocked.</em></h2></div>
        <div className="album-grid">
          {certificates.map((certificate, index) => <article className="certificate-card" key={certificate.file}><a href={`/certs/${certificate.file}`} target="_blank" rel="noreferrer" className="certificate-image"><Image src={`/certs/${certificate.file}`} alt={`${certificate.title} certificate`} fill sizes="(max-width: 700px) 92vw, (max-width: 1050px) 44vw, 29vw" /><span>view ↗</span></a><div><p>0{index + 1} / ARCHIVE</p><h3>{certificate.title}</h3><small>{certificate.note}</small></div></article>)}
        </div>
      </section>
      <footer className="archive-footer"><Link href="/#menu">← back to the menu</Link><SiteChain current="/achievements" /></footer>
    </main>
  );
}
