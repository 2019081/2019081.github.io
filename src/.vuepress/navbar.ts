import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "C = C + 1",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "控制结构",
        icon: "lightbulb",
        prefix: "foundation/",
        children: ["control", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
