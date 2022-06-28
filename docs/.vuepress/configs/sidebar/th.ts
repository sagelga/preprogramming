import type { SidebarConfig } from "@vuepress/theme-default";

export const th: SidebarConfig = {
  "/python/course/": [
    {
      text: "Python เบื้องต้น",
      link: "python/course/",
      children: [
        "/python/course/algorithm/",
        "/python/course/introduction/",
        "/python/course/variable/",
        "/python/course/data-type/",
        "/python/course/functions/",
        "/python/course/code-standard/",
        "/python/course/string/",
        "/python/course/decision/",
        "/python/course/loop/",
        "/python/course/array/",
        "/python/course/dictionary/",
      ],
    },
  ],
  "/python/excercise/": [
    {
      text: "การทำงาน",
      link: "/excercise/",
      children: [],
    },
  ],
};
