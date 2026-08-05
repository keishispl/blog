// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
     siteName: "keishispl",
     brand: {
          title: "News Blog",
          subtitle: "I write random stuff here and there.",
          logo: "🌸",
     },
     sidebar: {
          author: "圭紫",
          description: "I do a lot of different things at once.",
          social: {
               twitter: {
                    url: "https://twitter.com/keishispl",
                    icon: "i-ri-twitter-fill",
                    color: "#1DA1F2",
               },
               instagram: {
                    url: "https://www.instagram.com/keishispl/",
                    icon: "i-ri-instagram-fill",
                    color: "#E1306C",
               },
               youtube: {
                    url: "https://www.youtube.com/@keishispl",
                    icon: "i-ri-youtube-fill",
                    color: "#FF0000",
               },
               github: {
                    url: "https://github.com/keishispl",
                    icon: "i-ri-github-fill"
               }
          }
     },
     locale: "ja",
     layout: {
          mode: "two-column",
     },
     visibilityTitle: {
          enable: true,
          leaveTitle: "ちょっと待ってて、すぐ戻るよ〜",
          returnTitle: "おかえりなさい〜",
          restoreDelay: 3000,
     },
     cover: {
          fixedCover: {
               enable: false
          }
     },
     nav: [
          {
               href: "/",
               text: "ホーム",
               icon: "i-ri-home-line"
          },
          {
               text: "投稿",
               href: "/posts/",
               icon: "i-ri-quill-pen-fill",
               dropbox: {
                    enable: true,
                    items: [
                         {
                              href: "/categories/",
                              text: "カテゴリ",
                              icon: "i-ri-book-shelf-fill",
                         },
                         {
                              href: "/tags/",
                              text: "タグ",
                              icon: "i-ri-price-tag-3-fill",
                         },
                         {
                              href: "/archives/",
                              text: "アーカイブ",
                              icon: "i-ri-archive-line",
                         },
                    ],
               },
          },
          {
               href: "/about/",
               text: "自己紹介",
               icon: "i-ri-user-3-fill"
          }
     ]
});