import type { Metadata } from "next";
import JourneyExperience from "./journey-experience";

export const metadata: Metadata = {
  title: "My Journey - Shubhra Shukla",
  description:
    "An interactive timeline of Shubhra Shukla's journey from December 2023 to 2026 - operations, manufacturing, applied AI, research, mathematical leadership, and building Tidder.",
};

export default function JourneyPage() {
  return <JourneyExperience />;
}
