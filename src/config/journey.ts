/**
 * Developer journey timeline. Newest first.
 * Add milestones here. Only add things that happened; dates are free text.
 */
export type Milestone = {
  date: string;
  title: string;
  description: string;
  tag: "Project" | "Release" | "Learning" | "Milestone";
  link?: { label: string; href: string };
};

export const milestones: Milestone[] = [
  {
    date: "Nov 2026",
    title: "Built this portfolio",
    description:
      "Designed and built this site with Next.js, TypeScript, Tailwind CSS, Framer Motion and GSAP, exported as static files for GitHub Pages.",
    tag: "Project",
  },
];
