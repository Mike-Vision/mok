import githubConfig from "./github.json";

/**
 * Site-wide personal information.
 * Everything here is shown publicly. Only add details you want on the site.
 */
export const site = {
  name: "Ryan Brain Dev",
  shortName: "RBD",
  title: "Developer & Software Engineer",
  intro: "I create modern applications and intelligent solutions through code.",
  description:
    "Explore Ryan Brain Dev's portfolio, software projects, technologies, and development journey.",
  /** Public URL of the deployed site. The deploy workflow sets NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  github: {
    username: githubConfig.username,
    url: `https://github.com/${githubConfig.username}?tab=repositories`,
  },
  email: "huy73213@gmail.com",
  discord: "huy100408",
  /** Not provided yet. Set to a full URL to show it in the hero, contact and footer. */
  linkedin: null as string | null,
} as const;

export type NavItem = { id: string; label: string };

/** Sections shown in the navigation, in page order. `id` must match a section's id. */
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];
