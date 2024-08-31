import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/peter-233.github.io/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "peter-233的博客",
      description: "peter-233的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
