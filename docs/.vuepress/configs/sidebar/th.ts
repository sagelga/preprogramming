import type { SidebarConfig } from "@vuepress/theme-default";

export const th: SidebarConfig = {
  "/course/": [
    {
      text: "Python เบื้องต้น",
      link: "/course/",
      children: [
        "/course/python/algorithm/",
        "/course/python/introduction/",
        "/course/python/variable/",
        "/course/python/data-type/",
        "/course/python/functions/",
        "/course/python/code-standard/",
        "/course/python/string/",
        "/course/python/decision/",
        "/course/python/loop/",
        "/course/python/array/",
        "/course/python/dictionary/",
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
};
