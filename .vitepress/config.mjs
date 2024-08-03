import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./docs", // папка с файлами
  // lang: "ru-RU",
  // locales: {
  //   root: {
  //     label: "Russian",
  //     lang: "ru",
  //   },
  // },
  title: "База знаний",
  description: "Помощь и поддежка vkurse.ru",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo.svg", width: 24, height: 24 },
    search: {
      provider: "local",
    },
    nav: [
      { text: "ВКУРСЕ", link: "https://vkurse.ru" },
      { text: "Помощь", link: "faq/index.md" },
    ],

    sidebar: [
      {
        text: "Вебинары",
        collapsed: false,
        items: [
          { text: "Подготовка к Вебинару", link: "vebinar" },
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
        collapsed: false,
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
        collapsed: false,
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
      {
        text: "Релизы",
        collapsed: true,
        items: [
          {
            text: "Релиз 20",
            link: "relizy-po-vkurse/versiia-20",
          },
        ],
      },
      {
        text: "Помощь",
        collapsed: true,
        items: [
          {
            text: "Часто задаваемые вопросы (мероприятия)",
            link: "faq/index.md",
          },
        ],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
