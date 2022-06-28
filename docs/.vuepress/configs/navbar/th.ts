import type { NavbarConfig } from "@vuepress/theme-default";

export const th: NavbarConfig = [
  {
    text: "หน้าแรก",
    link: "/",
    children: [
      {
        text: "เกี่ยวกับ Pre-programming",
        link: "/about/",
      },
      {
        text: "คำถามถามบ่อย (FAQ)",
        link: "/about/faq/",
      },
    ],
  },
  {
    text: "เนื้อหา",
    link: "/python/course/",
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
  {
    text: "แบบฝึกหัด",
    link: "/python/exercise/",
    children: [],
  },
  {
    text: "เคล็ดลับ",
    link: "/tips/",
    children: ["/tips/activity/", "/tips/psit/"],
  },
  {
    text: "เพิ่มเติม",
    children: [
      {
        text: "Facebook Pre-pro 65",
        link: "https://www.facebook.com/groups/1452472885173471",
      },
      {
        text: "YouTube Pre-Pro",
        link: "https://www.youtube.com/c/PreProgrammingITKMITL",
      },
      {
        text: "Facebook คณะ",
        link: "https://www.facebook.com/ITLadkrabang",
      },
    ],
  },
];
