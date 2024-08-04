import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./docs", // папка с файлами
  outDir: "./dist", // папув аутпута
  assetsDir: "static",
  // lang: "ru-RU",
  // locales: {
  //   root: {
  //     label: "Russian",
  //     lang: "ru",
  //   },
  // },
  title: "База знаний",
  description: "Помощь и поддежка vkurse.ru",
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // lastUpdated: true,

    logo: { src: "/logo.svg", width: 24, height: 24 },
    search: {
      provider: "local",
    },
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    outline: { label: "Содержание страницы" },
    // lastUpdated: {
    //   text: "Обновлено",
    // },

    nav: [
      { text: "ВКУРСЕ", link: "https://vkurse.ru" },
      // { text: "Помощь", link: "faq/index.md" },
    ],

    sidebar: [
      {
        text: "Вебинары",
        base: "/vebinar/vebinar-",
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
        base: "/vstrechi/vstrechi-",
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
        base: "/leckii/lekcii-",
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
            items: [
              {
                text: "Релиз 20",
                link: "/release/relizy-po-vkurse-versiia-20",
              },
              {
                text: "Релиз 20.1",
                link: "/release/relizy-po-vkurse-versiia-20-1",
              },
            ],
          },
        ],
      },
      {
        text: "Помощь",
        collapsed: true,
        items: [
          {
            text: "Часто задаваемые вопросы (мероприятия)",
            link: "help-faq",
          },
        ],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
