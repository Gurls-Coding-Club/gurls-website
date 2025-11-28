// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain
  site: "https://gurls.bibisebi.com",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: true,
      // TODO: explore
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          de: "de-AT",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),
});
