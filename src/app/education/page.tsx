import type { Metadata } from "next";
import Link from "next/link";
import SiteChain from "@/components/site-chain";

export const metadata: Metadata = {
  title: "Education - Shubhra Shukla",
  description:
    "Formal education, olympiad training with OTIS, and additional academic programs of Shubhra Shukla.",
};

type EduEntry = {
  institution: string;
  qualification: string;
  status: string;
  current?: boolean;
  meta: { label: string; value: string }[];
  description?: string;
};

const formalEducation: EduEntry[] = [
  {
    institution: "Lucky International School",
    qualification: "High School Diploma",
    status: "Ongoing",
    current: true,
    meta: [
      { label: "GRADE", value: "12th" },
      { label: "CURRICULUM", value: "Cambridge" },
      { label: "EXPECTED GRADUATION", value: "2027" },
    ],
  },
];

const mathematicalTraining: EduEntry[] = [
  {
    institution: "OTIS",
    qualification: "Olympiad Training for Individual Study",
    status: "Ongoing",
    current: true,
    meta: [
      { label: "AREA", value: "Mathematics" },
      { label: "DURATION", value: "May 2026 – April 2027" },
    ],
    description:
      "A year-long mathematics olympiad training program conducted by Dr. Evan Chen (MIT), focused on rigorous practice and challenging international mathematical problems.",
  },
];

const additionalPrograms: EduEntry[] = [
  {
    institution: "GCI World 2026",
    qualification: "Data Science Education Program",
    status: "Ongoing",
    current: true,
    meta: [],
    description:
      "An international data science education program developed by the Matsuo-Iwasawa Laboratory at the University of Tokyo, with support from JICA.",
  },
  {
    institution: "Applied Robotics Course",
    qualification: "Robotics Training",
    status: "Ongoing",
    current: true,
    meta: [],
    description:
      "An applied robotics course by Boring Sage, taken with a 90% scholarship.",
  },
  {
    institution: "COMPOS",
    qualification: "Comprehensive Oxford Mathematics and Physics Online School",
    status: "Ongoing",
    current: true,
    meta: [
      { label: "ORGANISER", value: "University of Oxford · Department of Physics" },
      { label: "FOCUS", value: "Mathematics & Physics" },
    ],
    description:
      "Enrolled in the University of Oxford Department of Physics outreach programme for students in Years 10–13.",
  },
];

function EducationEntry({ entry }: { entry: EduEntry }) {
  return (
    <li className="edu-entry">
      <div className="edu-entry-head">
        <h3>{entry.institution}</h3>
        <span className={`edu-status${entry.current ? " is-current" : ""}`}>{entry.status}</span>
      </div>
      <p className="edu-qualification">{entry.qualification}</p>
      {entry.description ? <p className="edu-desc">{entry.description}</p> : null}
      <dl className="edu-meta">
        {entry.meta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </li>
  );
}

export default function EducationPage() {
  return (
    <main className="archive-page game-archive education-page">
      <header className="archive-header">
        <Link href="/#menu" className="archive-back">← menu</Link>
        <p>EDUCATION MODE <span>/ academics</span></p>
        <span className="archive-count">{formalEducation.length + mathematicalTraining.length + additionalPrograms.length} ENTRIES</span>
      </header>

      <section className="archive-hero">
        <div>
          <p className="archive-kicker">SCHOOL & TRAINING RECORD</p>
          <h1>Where I’ve<br /><em>learned.</em></h1>
          <p className="archive-intro">School, olympiad training, and the programs in between.</p>
        </div>
        <p className="archive-aside">CURRENTLY<br /><span>grade 12 · OTIS</span> ↓</p>
      </section>

      <section className="edu-section" aria-label="Formal education">
        <div className="edu-inner">
          <h2 className="edu-heading">Formal education</h2>
          <ul className="edu-list">
            {formalEducation.map((entry) => (
              <EducationEntry entry={entry} key={entry.institution} />
            ))}
          </ul>
        </div>
      </section>

      <section className="edu-section edu-section-alt" aria-label="Mathematical training">
        <div className="edu-inner">
          <h2 className="edu-heading">Mathematical training</h2>
          <ul className="edu-list">
            {mathematicalTraining.map((entry) => (
              <EducationEntry entry={entry} key={entry.institution} />
            ))}
          </ul>
        </div>
      </section>

      <section className="edu-section" aria-label="Additional programs and training">
        <div className="edu-inner">
          <h2 className="edu-heading">Additional programs &amp; training</h2>
          <ul className="edu-list">
            {additionalPrograms.map((program) => (
              <EducationEntry entry={program} key={program.institution} />
            ))}
          </ul>
        </div>
      </section>

      <footer className="archive-footer">
        <Link href="/#menu">← back to the menu</Link>
        <SiteChain current="/education" />
      </footer>
    </main>
  );
}
