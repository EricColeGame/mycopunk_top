export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Mycopunk Wiki",
  shortName: "Mycopunk",
  logoText: "M",
  tagline: "Weapons, Upgrades, Missions & Co-op Guides",
  description: "Mycopunk guides for weapons, upgrades, missions, enemies, and cooperative play.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mycopunk.top",
  supportEmail: "support@mycopunk.top",
  gameUrl: "https://store.steampowered.com/app/3247750/Mycopunk/",
  heroVideoId: "9rplvaKp-oY",
  social: {
    discord: "https://discord.gg/mycopunk",
    youtube: "https://www.youtube.com/watch?v=KJ_vn5911jE",
  },
  locales: ["en", "ja", "de", "es"],
  defaultLocale: "en",
};
