import type { StaticImageData } from "next/image";

export type ProjectArtKind = "home" | "robot" | "assistant" | "education" | "academy";

export type Project = {
  slug: string;
  name: string;
  /** Short category line under the name. */
  tagline: string;
  /** One or two sentences for the card. */
  summary: string;
  /** Longer bullet points for the detail view. Only real, verified features. */
  highlights: string[];
  tech: string[];
  /** Real screenshots. When empty, generated artwork is shown instead. */
  images: { src: StaticImageData; alt: string }[];
  art: ProjectArtKind;
  /** Only set when the repository really exists and is public. */
  repo?: string;
  /** Only set when a real, working demo or website exists. */
  demo?: string;
  /** Button label for `demo`. Defaults to "Live demo". */
  demoLabel?: string;
  year?: string;
  /**
   * true = details have not been verified yet. The card shows "Details coming soon"
   * and, in development, a reminder to fill this entry in.
   */
  needsInfo?: boolean;
};

export const projects: Project[] = [];
