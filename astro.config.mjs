import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});