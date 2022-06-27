import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  // extra tags in `<head>`
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://img.icons8.com/fluency/128/000000/e-learning.png",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "th-TH",
      title: "IT KMITL Pre-Programming",
      description: "คอรส์เรียนเขียนโปรแกรมเบื้องต้นสำหรับนักเรียนคณะ IT KMITL",
    },
  },

  theme: defaultTheme({
    logo: "https://img.icons8.com/fluency/128/000000/e-learning.png",
    repo: "sagelga/preprogramming",
    repoLabel: "รายงานปัญหา",
    docsRepo: "sagelga/preprogramming",
    docsBranch: "main",

    locales: {
      "/": {
        navbar: navbar.th,
        sidebar: sidebar.th,
        editLink: false,
        lastUpdatedText: "แก้ไขล่าสุด",
        contributorsText: "เขียนโดย",
      },
    },
  }),

  plugins: [
    // docsearchPlugin({
    //   appId: "VIR8TV46UV",
    //   apiKey: "b4ef90b459d81c338bf1f61b2ad2ad06",
    //   indexName: "sagelga",
    // }),
    googleAnalyticsPlugin({
      id: "G-5RQS97DPM9",
    }),
  ],
});
