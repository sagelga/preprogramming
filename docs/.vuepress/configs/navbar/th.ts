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
  {
    text: "แบบฝึกหัด",
    link: "/exercise/",
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
