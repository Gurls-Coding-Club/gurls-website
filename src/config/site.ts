/**
 * Site Configuration
 *
 * Centralized configuration for site-wide information including
 * organization details, social media, contact info, and banking details.
 */

export const siteConfig = {
  // Site metadata
  name: "G:URL*s Coding Club",
  shortName: "G:URL*s",
  description: "Coding club for FLINTA* individuals in Vienna, Austria",
  url: "https://gurls.club",

  // Organization details
  organization: {
    name: "G:URL*s Coding Club",
    fullLegalName:
      "G:URL*s coding club Programmierprogramm und Beratungsgemeinschaft für Studierende",
    foundingYear: "2024",
    type: "Verein (Non-profit organization)",
    targetAudience: "FLINTA* community",
  },

  // Contact information
  contact: {
    email: "codingclubvienna@gmail.com",
    address: {
      street: "Herbststraße 67/8",
      postalCode: "1160",
      city: "Vienna",
      cityDe: "Wien",
      country: "Austria",
      countryDe: "Österreich",
      countryCode: "AT",
    },
  },

  // Social media links
  social: {
    instagram: {
      name: "Instagram",
      url: "https://instagram.com/gurls.club",
      handle: "@gurls.club",
    },
    discord: {
      name: "Discord",
      url: "https://discord.gg/gurls",
      handle: "discord.gg/gurls",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/company/gurls-club",
      handle: "gurls-club",
    },
  },

  // Banking information for donations
  banking: {
    accountHolder: "G:URL*S Coding Club",
    iban: "0000 0000 0000 0000 0000",
    bic: "XXXXXX",
    bank: "X Bank AG",
    reference: "Donation G:URL*s",
  },

  // Sponsors (can be expanded with logos and URLs)
  sponsors: [
    {
      id: "sponsor-1",
      name: "Sponsor Logo 1",
      // logo: "/sponsors/sponsor1.png",
      // url: "https://sponsor1.com",
    },
    {
      id: "sponsor-2",
      name: "Sponsor Logo 2",
      // logo: "/sponsors/sponsor2.png",
      // url: "https://sponsor2.com",
    },
    {
      id: "sponsor-3",
      name: "Sponsor Logo 3",
      // logo: "/sponsors/sponsor3.png",
      // url: "https://sponsor3.com",
    },
  ],

  // Media credits
  media: {
    photographer: "TODO: Add actual photographer name",
  },

  // Theme
  theme: {
    primaryColor: "#5759a6",
    secondaryColor: "#6c95b8",
    accentColor: "#6466e1",
  },

  // Legal information
  legal: {
    fullLegalName:
      "G:URL*s coding club Programmierprogramm und Beratungsgemeinschaft für Studierende",
    zvr: "1084046589",
    representatives: [
      "Emily Aline Grubb",
      "Laura Kathleen Goebel",
      "Lara Mijanovic",
    ],
    regulatoryAuthority: "Magistrat der Stadt Wien",
    registrationAuthority: "Landespolizeidirektion Wien",
  },
} as const;

// Type helper for social media platforms
export type SocialPlatform = keyof typeof siteConfig.social;

// Helper to get social media array for iteration
export const socialMediaArray = Object.entries(siteConfig.social).map(
  ([key, value]) => ({
    platform: key as SocialPlatform,
    ...value,
  })
);

// Helper to format address
export function formatAddress(locale: "en" | "de" = "en"): string {
  const { street, postalCode, city, cityDe, country, countryDe } =
    siteConfig.contact.address;
  const localizedCity = locale === "de" ? cityDe : city;
  const localizedCountry = locale === "de" ? countryDe : country;
  return `${street},\n${postalCode} ${localizedCity}, ${localizedCountry}`;
}

// Helper to get full organization name with location
export function getFullOrganizationName(locale: "en" | "de" = "en"): string {
  return `${siteConfig.organization.name} - ${siteConfig.organization.targetAudience} in ${siteConfig.contact.address.city}`;
}
