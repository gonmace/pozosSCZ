import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), sitemap()],
  output: 'server',
  site: 'https://pozosscz.com',
  adapter: node({
    mode: "standalone"
  })
});