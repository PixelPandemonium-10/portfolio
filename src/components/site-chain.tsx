import Link from "next/link";
import { Fragment } from "react";

const sections = [
  { href: "/about", label: "about" },
  { href: "/achievements", label: "achievements" },
  { href: "/journey", label: "journey" },
  { href: "/publications", label: "publications" },
  { href: "/education", label: "education" },
  { href: "/programming", label: "programming" },
];

export default function SiteChain({ current }: { current: string }) {
  return (
    <nav className="footer-chain" aria-label="Site sections">
      {sections.map((section, index) => (
        <Fragment key={section.href}>
          {index > 0 ? <span aria-hidden="true">·</span> : null}
          {section.href === current ? (
            <b aria-current="page">{section.label}</b>
          ) : (
            <Link href={section.href}>{section.label}</Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
