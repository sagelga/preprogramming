// https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar
// https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/en.ts

import type { SidebarConfig } from "@vuepress/theme-default";

export const th: SidebarConfig = {
  "/course/": [
    {
      text: "Python เบื้องต้น",
      link: "/course/",
      children: [
        "/course/",
        "/course/algorithm/",
        "/course/introduction/",
        "/course/variable/",
        "/course/functions/",
        "/course/string/",
        "/course/decision/",
        "/course/loop/",
        "/course/array/",
        "/course/dictionary/",
      ],
    },
  ],
  "/excercise/": [
    {
      text: "การทำงาน",
      link: "/excercise/",
      children: [],
    },
  ],
  "/tips/": [
    {
      text: "เคล็ดลับ",
      link: "/tips/",
      children: ["/tips/activity/", "/tips/psit/"],
    },
  ],
};
