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
      // { text: "Помощь", link: "faq/index.md" },
    ],

    sidebar: [
      {
        text: "Вебинары",
        base: "/vebinar-",
        collapsed: true,
        items: [
          { text: "Подготовка к Вебинару", link: "prepare" },
          { text: "Настройки Вебинара", link: "nastroiki-vebinara" },
          {
            text: "Вещание во время Вебинара",
            link: "veshhanie-vo-vremia-vebinara",
          },
          {
            text: "Настройка оборудования",
            link: "nastroika-oborudovaniia",
          },
        ],
      },
      {
        text: "Встречи",
        base: "/meetings-",
        collapsed: true,
        items: [
          { text: "Подготовка к встрече", link: "prepare" },
          { text: "Настройки встречи", link: "nastroiki-vstreci" },
          {
            text: "Вещание во время Встречи",
            link: "veshhanie-vo-vremia-vstreci",
          },
          {
            text: "Настройка оборудования",
            link: "nastroika-oborudovaniia-Mgz",
          },
        ],
      },
      {
        text: "Лекции",
        base: "/lekcii-",
        collapsed: true,
        items: [
          { text: "Подготовка к лекции", link: "prepare" },
          { text: "Настройки", link: "nastroiki-vstreci" },
          { text: "Вещание во время Лекции", link: "nastroiki-vstreci" },
          { text: "Настройка оборудования.", link: "nastroiki-vstreci" },
        ],
      },
      {
        text: "Селектор",
        base: "/selektor-",
        collapsed: true,
        items: [
          { text: "Подготовка к лекции", link: "prepare" },
          { text: "Настройки", link: "nastroiki-vstreci" },
          { text: "Настройки", link: "nastroiki-vstreci" },
          { text: "Настройки", link: "nastroiki-vstreci" },
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
