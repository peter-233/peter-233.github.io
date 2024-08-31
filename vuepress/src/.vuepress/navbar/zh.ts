import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "posts/",
    link: "/posts/",
  },
]);
