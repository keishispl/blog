import type { ShokaXThemeConfig } from "./themeConfig";

export const DEFAULT_THEME_CONFIG: ShokaXThemeConfig = {
  siteName: "ShokaX",
  locale: "ja",
  analytics: {
    googleAnalytics: {
      // GA4 衡量 ID，例如 "G-XXXXXXXXXX"；留空则不注入 GA 脚本
      measurementId: "",
    },
    umami: {
      // Umami 网站 ID；留空则不注入 Umami 脚本
      websiteId: "",
      // Umami 追踪脚本地址；留空时使用官方云端脚本
      scriptUrl: "",
    },
  },
  nav: [
    {
      href: "/",
      text: "首页",
      icon: "i-ri-home-line",
    },
    {
      text: "关于",
      href: "/about/",
      icon: "i-ri-user-3-line",
    },
    {
      text: "文章",
      href: "/random/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true,
        items: [
          {
            href: "/categories/",
            text: "分类",
            icon: "i-ri-book-shelf-fill",
          },
          {
            href: "/tags/",
            text: "标签",
            icon: "i-ri-price-tag-3-fill",
          },
          {
            href: "/archives/",
            text: "归档",
            icon: "i-ri-archive-line",
          },
        ],
      },
    },
    {
      text: "友链",
      href: "/friends/",
      icon: "i-ri-link",
    },
    {
      text: "动态",
      href: "/moments/",
      icon: "i-ri-chat-quote-line",
    },
    {
      text: "统计",
      href: "/statistics/",
      icon: "i-ri-bar-chart-box-line",
    },
  ],
  brand: {
    title: "ShokaX",
    subtitle: "A modern blog theme",
    logo: "✨",
  },
  cover: {
    enable: true,
    preload: true,
    advancedCarousel: false,
    fixedCover: {
      enable: true,
      url: "cover-4",
    },
    coverUrls: [],
    nextGradientCover: false,
  },
  sidebar: {
    author: "Your Name",
    description: "A brief introduction",
    social: {},
  },
  footer: {
    since: 2026,
    icon: {
      name: "sakura rotate",
      color: "var(--color-pink)",
    },
    count: true,
    powered: true,
    icp: {
      enable: false,
      icpnumber: "津ICP备2022001375号",
      icpurl: "https://beian.miit.gov.cn/",
    },
  },
  tagCloud: {
    startColor: "var(--grey-6)",
    endColor: "var(--color-blue)",
  },
  widgets: {
    randomPosts: true,
    recentComments: true,
    recentCommentsLimit: 10,
  },
  comments: {
    enable: false,
    waline: {
      serverURL: "",
      lang: "ja",
    },
  },
  hyc: {
    enable: false,
    aiSummary: {
      enable: true,
      title: "AI 文章摘要",
      showModel: true,
      cardExcerptSource: "default",
    },
    aiRecommend: {
      enable: true,
      limit: 3,
      minSimilarity: 0.4,
    },
  },
  diagnostics: {
    suppressFsWatcherMaxListenersWarning: true,
  },
  nyxPlayer: {
    enable: false,
    preset: "shokax",
    darkModeTarget: ':root[data-theme="dark"]',
    urls: [
      {
        name: "プレイリスト",
        url: "https://music.163.com/#/playlist?id=2943811283",
      },
    ],
  },
  visibilityTitle: {
    enable: true,
    leaveTitle: "👀 你先忙，我等你回来~",
    returnTitle: "🎉 欢迎回来！",
    restoreDelay: 3000,
  },
  home: {
    selectedCategories: [{ name: "Tutorial" }, { name: "Frontend" }],
    pageSize: 5,
    title: {
      behavior: "default",
      customTitle: "",
    },
  },
  layout: {
    mode: "three-column",
    rightSidebar: {
      order: ["announcement", "search", "calendar", "recentMoments", "randomPosts", "tagCloud"],
      announcement: true,
      search: true,
      calendar: true,
      recentMoments: true,
      randomPosts: true,
      tagCloud: true,
    },
  },
  friends: {
    title: "友達",
    description: "カード式展示，サポートサイトプレビューとテーマ色の点飾り。",
    comments: false,
    links: [],
  },
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    show: true,
  },
};
