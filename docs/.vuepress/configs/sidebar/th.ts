// https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar
// https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/en.ts

import type { SidebarConfig } from "@vuepress/theme-default";

export const th: SidebarConfig = {
  "/approval-workflow/": [
    {
      text: "Approval Workflow",
      children: [
        "/approval-workflow/docs/overall/start/",
        "/approval-workflow/docs/overall/requirement/",
        "/approval-workflow/docs/overall/install/",
        "/approval-workflow/docs/overall/setup/",
        "/approval-workflow/docs/overall/how-it-works/",
        "/approval-workflow/docs/overall/status/",
      ],
    },
    {
      text: "Configuration",
      children: [
        "/approval-workflow/docs/develop/config/config/",
        "/approval-workflow/docs/develop/config/response/",
        {
          text: "Module",
          children: [
            "/approval-workflow/docs/develop/module/email/",
            "/approval-workflow/docs/develop/module/email-function/",
            "/approval-workflow/docs/develop/module/functions/",
            "/approval-workflow/docs/develop/module/main/",
            "/approval-workflow/docs/develop/module/sheets/",
            "/approval-workflow/docs/develop/module/sheetsInbound/",
            "/approval-workflow/docs/develop/module/utility/",
          ],
        },
      ],
    },
    {
      text: "Maintain",
      children: [
        "/approval-workflow/docs/maintain/constraints/",
        "/approval-workflow/docs/maintain/issues/",
      ],
    },
    {
      text: "User Manual",
      children: [
        "/approval-workflow/manual/approver/",
        "/approval-workflow/manual/requester/",
      ],
    },
  ],
  "/codenames/": [
    {
      text: "Codenames",
      children: ["/codenames/"],
    },
    {
      text: "Contribute",
      children: ["/codenames/contribute/", "/codenames/wordlist/"],
    },
  ],
  "/compro-project/": [
    {
      text: "Getting Started",
      children: [
        "/compro-project/getting-start/installation/",
        "/compro-project/getting-start/requirement/",
        "/compro-project/getting-start/shortcut-keys/",
      ],
    },
    {
      text: "Compro Project",
      children: [
        "/compro-project/proposal/",
        "/compro-project/credits/",
        "/compro-project/theory/",
      ],
    },
    {
      text: "Features",
      children: [
        "/compro-project/feature/access-management/",
        "/compro-project/feature/customer/",
        "/compro-project/feature/forecast/",
        "/compro-project/feature/inventory/",
        "/compro-project/feature/login/",
        "/compro-project/feature/loyalty/",
        "/compro-project/feature/main-menu/",
        "/compro-project/feature/promo/",
        "/compro-project/feature/report/",
        "/compro-project/feature/sales/",
        "/compro-project/feature/settings/",
      ],
    },
  ],
  "/data-journal/": [
    {
      text: "Data Journal",
      children: ["/data-journal/", "/data-journal/report/"],
    },
  ],
  "/documentation/": [
    {
      text: "Documentation",
      children: [
        "/documentation/",
        {
          text: "Release Notes",
          link: "https://github.com/sagelga/documentation/releases",
        },
      ],
    },
    {
      text: "Customization",
      children: [
        "/documentation/custom/components/",
        "/documentation/custom/dark-mode/",
        "/documentation/custom/plugins/",
      ],
    },
  ],
  "/oh-sheet/": [
    {
      text: "Oh Sheet!",
      children: [
        "/oh-sheet/",
        "/oh-sheet/overview/about/",
        "/oh-sheet/overview/feature/",
      ],
    },
  ],
  "/panda/": [
    {
      text: "Project Panda",
      children: [
        "/panda/",
        "/panda/proposal/",
        "/panda/credits/",
        {
          text: "Requirement",
          children: [
            "/panda/requirement/workflow/",
            "/panda/requirement/IT/",
            "/panda/requirement/AMC/",
            "/panda/requirement/supplies/",
            "/panda/requirement/ECC/",
            "/panda/requirement/reg/",
            "/panda/requirement/student/",
            "/panda/requirement/robin/",
          ],
        },
      ],
    },
    {
      text: "Documentation",
      children: [
        {
          text: "Front-end",
          children: [
            "/panda/docs/front-end/attribution/",
            "/panda/docs/front-end/components/",
            "/panda/docs/front-end/style-guide",
          ],
        },
        {
          text: "Back-end",
          children: [
            "/panda/docs/back-end/apollo/",
            "/panda/docs/back-end/session/",
          ],
        },
        "/panda/docs/api/",
        "/panda/docs/glossary/",
      ],
    },
    {
      text: "User Manual",
      children: [
        {
          text: "Client",
          children: [
            "/panda/manual/client/cancel-request.md",
            "/panda/manual/client/check-request.md",
            "/panda/manual/client/find-space.md",
            "/panda/manual/client/login.md",
            "/panda/manual/client/logout.md",
            "/panda/manual/client/report-problem.md",
            "/panda/manual/client/reserve-space.md",
            "/panda/manual/client/search-space.md",
          ],
        },
        {
          text: "Approver",
          children: [
            "/panda/manual/approver/approve-request.md",
            "/panda/manual/approver/decline-request.md",
          ],
        },
        {
          text: "Admin",
          children: [
            "/panda/manual/admin/add-material.md",
            "/panda/manual/admin/add-role.md",
            "/panda/manual/admin/add-space.md",
            "/panda/manual/admin/create-group.md",
            "/panda/manual/admin/delete-group.md",
            "/panda/manual/admin/delete-role.md",
            "/panda/manual/admin/delete-space.md",
            "/panda/manual/admin/edit-group.md",
            "/panda/manual/admin/edit-space.md",
          ],
        },
      ],
    },
  ],
  "/trashmelody/": [
    {
      text: "TrashMelody",
      children: [
        "/trashmelody/",
        "/trashmelody/overall/proposal/",
        "/trashmelody/overall/requirement/",
        "/trashmelody/credit/",
        "/trashmelody/others/framework.md",
        // '/trashmelody/others/package.md',
        // "/trashmelody/others/statistics.md",
      ],
    },
    {
      text: "Documentation",
      children: [
        "/trashmelody/docs/inheritance/",
        {
          text: "API",
          children: ["/trashmelody/docs/api/ResultScreen/"],
        },
      ],
    },
    {
      text: "User Manual",
      children: [
        "/trashmelody/overall/install/",
        "/trashmelody/overall/play/",
        "/trashmelody/overall/control/",
        "/trashmelody/overall/rule/",
        "/trashmelody/overall/playlist/",
      ],
    },
  ],
};
