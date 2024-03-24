import { defineUserConfig } from "vuepress";
import { commentPlugin } from 'vuepress-plugin-comment2'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "ATLAS生物信息博客",
      // description: "一个生信研究者",
    },
  },
  plugins: [
    commentPlugin({
      provider: 'Giscus',
      repo: "atlasbioinfo/blogs",
      repoId:"R_kgDOLbrj1Q",
      category:"General",
      categoryId:"DIC_kwDOLbrj1c4CeMsJ"
    }),
  ],
  theme
  
});
