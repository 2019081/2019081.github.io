import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小启的个人主页",
  description: "学习编程、数学的日常记录",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
