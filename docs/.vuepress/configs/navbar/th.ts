import type { NavbarConfig } from "@vuepress/theme-default";

export const th: NavbarConfig = [
  {
    text: "หน้าแรก",
    link: "/",
    children: [
      {
        text: "เกี่ยวกับ Pre-programming",
        link: "/introduction/about/",
      },
    ],
  },
  {
    text: "เนื้อหา",
    link: "/course/",
    // children: [
    //   {
    //     text: "Introduction",
    //     link: "/introduction/",
    //   },
    // ],
  },
  {
    text: "แบบฝึกหัด",
    link: "/exercise/",
    // children: [
    //   {
    //     text: "Introduction",
    //     link: "/introduction/",
    //   },
    // ],
  },
  {
    text: "เคล็ดลับ",
    link: "/tips/",
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
