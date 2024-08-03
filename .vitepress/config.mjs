import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vkurse help docs",
  description: "knowledge base",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Вебинары",
        collapsed: true,
        items: [
          { text: "Подготовка к Вебинару", link: "vebinar/" },
          { text: "Настройки Вебинара", link: "vebinar/nastroiki-vebinara" },
          {
            text: "Вещание во время Вебинара",
            link: "vebinar/veshhanie-vo-vremia-vebinara",
          },
          {
            text: "Настройка оборудования",
            link: "vebinar/nastroika-oborudovaniia",
          },
        ],
      },
      {
        text: "Встречи",
        collapsed: true,
        items: [
          { text: "Подготовка к встрече", link: "meetings/index.md" },
          { text: "Настройки встречи", link: "meetings/nastroiki-vstreci.md" },
          {
            text: "Вещание во время Встречи",
            link: "meetings/veshhanie-vo-vremia-vstreci.md",
          },
          {
            text: "Настройка оборудования",
            link: "meetings/nastroika-oborudovaniia-Mgz.md",
          },
        ],
      },
      {
        text: "Мобильные приложения",
        collapsed: true,
        items: [
          { text: "Для iOS", link: "meetings/index.md" },
          {
            text: "Для Android",
            link: "meetings/veshhanie-vo-vremia-vstreci.md",
          },
          {
            text: "Как поставить",
            link: "meetings/nastroika-oborudovaniia-Mgz.md",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
