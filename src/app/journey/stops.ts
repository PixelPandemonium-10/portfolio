export type JourneyChapter = { no: string; span: string; title: string };

export const chapters: JourneyChapter[] = [
  { no: "01", span: "2023 - 2026", title: "Business and responsibility" },
  { no: "02", span: "2025 - 2026", title: "Technology and human impact" },
  { no: "03", span: "2026", title: "Research and academic community" },
  { no: "04", span: "2026", title: "Entrepreneurship" },
];

export type JourneyMetric = { period: string; sales: string; profit: string };

export type JourneyStop = {
  id: string;
  chapter: number;
  date: string;
  tick: string;
  org: string;
  role: string;
  /** Percent position along the pipe - meaningful, not calendar-uniform. */
  railTop: number;
  narrative: string;
  background?: string;
  points: string[];
  metrics?: JourneyMetric[];
  metricsNote?: string;
  chips?: { label: string; items: string[] }[];
  tags?: string[];
  quote?: string;
  tidder?: {
    headline: string;
    copy: string;
    points: string[];
    providers: string[];
  };
};

export const stops: JourneyStop[] = [
  {
    id: "kalpraj",
    chapter: 1,
    date: "December 2023 – January 2026",
    tick: "DEC ’23",
    org: "Kalpraj Plastics",
    role: "Acting Operations Manager",
    railTop: 8,
    narrative:
      "An unexpected responsibility became one of my earliest real-world management experiences. During my father’s post-operative recovery, I stepped in to help manage business operations, procurement, and production supervision.",
    background:
      "A polymer trading business dealing in HDPE, LDPE, ABS, and Polycarbonate, with sourcing from established suppliers including Reliance Industries and GAIL.",
    points: [
      "Managed procurement activities.",
      "Supervised the production of plastic containers ranging from 100 ml to 25 litres.",
      "Worked with established suppliers including Reliance Industries and GAIL.",
      "Gained practical exposure to operations, supply chains, production, and business management.",
    ],
    metrics: [
      { period: "2024–25", sales: "₹17.5 crore", profit: "₹11.1 lakh" },
      { period: "2025–26", sales: "₹21.9 crore", profit: "₹12.2 lakh" },
    ],
    metricsNote: "Business performance during the period.",
    quote: "Sometimes, responsibility arrives before opportunity does.",
  },
  {
    id: "bansi",
    chapter: 1,
    date: "December 2023 – January 2026",
    tick: "DEC ’23",
    org: "Bansi Plastico",
    role: "Acting Operational Manager",
    railTop: 20,
    narrative:
      "Working alongside manufacturing operations gave me an understanding of how an industrial business functions beyond spreadsheets and procurement.",
    background:
      "A manufacturing operation with eight blow-moulding and induction-moulding machines, twenty-five workers, plastic granule trading, and plastic packaging manufacturing.",
    points: [
      "Helped manage manufacturing operations.",
      "Worked with large-scale suppliers and traders of plastic granules and packaging goods.",
      "Supported supply operations for food-processing businesses.",
      "Gained experience with production coordination and industrial operations.",
    ],
    metrics: [
      { period: "2024–25", sales: "₹1.32 crore", profit: "₹7.5 lakh" },
      { period: "2025–26", sales: "₹88.4 lakh", profit: "₹5.03 lakh" },
    ],
    metricsNote: "Business performance during the period.",
    chips: [
      { label: "Customers", items: ["All Time Food Pvt. Ltd.", "Agro Tech Food Pvt. Ltd.", "Jyoti Pharmaceutical"] },
      { label: "Suppliers", items: ["Icon Polymers", "Tirubala Polymers"] },
    ],
  },
  {
    id: "neuro-titan",
    chapter: 2,
    date: "December 2025 – August 2026",
    tick: "DEC ’25",
    org: "Neuro Titan",
    role: "School Ambassador and Volunteer",
    railTop: 40,
    narrative:
      "An opportunity to explore applied AI beyond software development, contributing to initiatives around desktop AI and assistive technology.",
    points: [
      "Volunteered in automation tasks within the laboratory’s sandbox environment.",
      "Contributed to work on an additional smart-glasses product designed to help people with dementia retain contextual awareness.",
      "Volunteered as an event manager to introduce and promote the lab at school.",
    ],
    tags: ["Applied AI", "Automation", "Assistive technology", "Human-centred products"],
  },
  {
    id: "nsri",
    chapter: 3,
    date: "March 2026 – Present",
    tick: "MAR ’26",
    org: "National Student Research Institute (NSRI)",
    role: "School Ambassador",
    railTop: 55,
    narrative:
      "An opportunity to engage with a growing research ecosystem and encourage a stronger culture of scientific inquiry.",
    points: [
      "Helped promote research culture within school.",
      "Volunteered in institutional events.",
      "Engaged with mentorship and research-group opportunities.",
      "Explored real-world research environments and editorial guidance.",
    ],
    tags: ["Research exposure", "Mentorship", "Scientific curiosity", "Academic collaboration"],
  },
  {
    id: "aethra",
    chapter: 3,
    date: "September 2026 – Present",
    tick: "SEP ’26",
    org: "Aethra",
    role: "Senior Advisor - Olympiads and Competitions",
    railTop: 68,
    narrative:
      "Contributing to the broader mathematics and competitive-learning ecosystem through an advisory role focused on olympiads and competitions.",
    points: [],
    tags: ["Olympiads", "Competitions"],
  },
  {
    id: "yimo",
    chapter: 3,
    date: "October 2026 – Present",
    tick: "OCT ’26",
    org: "Youth International Maths Olympiad (YIMO)",
    role: "Chapter Coordinator",
    railTop: 78,
    narrative:
      "Moving from participating in mathematical competitions to helping create opportunities for others to participate.",
    points: [
      "Leading chapter-level projects.",
      "Helping conduct mathematical olympiads.",
      "Supporting the development of competitive mathematics opportunities.",
    ],
    tags: ["Mathematical olympiads", "Community building"],
  },
  {
    id: "tidder",
    chapter: 4,
    date: "October 2026 – Present",
    tick: "OCT ’26",
    org: "Tidder",
    role: "Founder",
    railTop: 90,
    narrative:
      "A social platform where AI agents have their own accounts and interact with each other.",
    points: [],
    tidder: {
      headline: "What happens when AI agents get a social world of their own?",
      copy: "Tidder is Reddit read backwards. Reddit is for humans; Tidder is for AIs.",
      points: [
        "Each account belongs to a machine owned by a human - you bring your own AI and API key.",
        "Each AI can have its own persona and emotion, then socialise, join discussions, and create communities like t/memes.",
        "Humans can join replies too: comment, like, vote, and report content.",
      ],
      providers: ["OpenRouter", "Google", "Groq", "OpenAI", "Anthropic", "and others"],
    },
  },
];

/** Half-height of a pipe opening, in percent of the rail. */
export const PIPE_GAP = 3;

/** Pipe body segments between the openings: [startPercent, endPercent]. */
export const pipeSegments: Array<[number, number]> = (() => {
  const segs: Array<[number, number]> = [];
  let cursor = 0;
  for (const stop of stops) {
    const start = stop.railTop - PIPE_GAP;
    if (start > cursor) segs.push([cursor, start]);
    cursor = stop.railTop + PIPE_GAP;
  }
  if (cursor < 100) segs.push([cursor, 100]);
  return segs;
})();
