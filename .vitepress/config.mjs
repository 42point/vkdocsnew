import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./docs", // папка с файлами
  outDir: "./dist", // папув аутпута
  assetsDir: "static",
  ignoreDeadLinks: true,
  // lang: "ru-RU",
  // locales: {
  //   root: {
  //     label: "Russian",
  //     lang: "ru",
  //   },
  // },
  title: "База знаний",
  head: [
    [
      "script",
      {},
      `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(97994354, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true
      });`,
    ],
    [
      "noscript",
      {},
      `<div><img src="https://mc.yandex.ru/watch/97994354" style="position:absolute; left:-9999px;" alt="" /></div>`,
    ],
  ],
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
        text: "Начало работы",
        base: "/start/start-",
        collapsed: true,
        items: [
          { text: "Как подключиться", link: "how-to" },
          {
            text: "Пробный период",
            link: "kak-effektivno-ispolzovat-probnyi-period-dlia-kommerceskogo-tarifa",
          },
          {
            text: "Приложение для ПК",
            link: "kak-skacat-prilozenie-dlia-pc-na-windows",
          },
          {
            text: "Приложение для Macos",
            link: "kak-ustanovit-prilozenie-na-macos",
          },
        ],
      },
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
          { text: "Для iOS", link: "/apps/iOS" },
          {
            text: "Для Android",
            link: "/apps/android/",
          },
          {
            text: "Как поставить",
            link: "/ustanovka-prilozenii/",
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
          {
            text: "Релиз 19",
            items: [
              {
                text: "Релиз 19",
                link: "/release/relizy-po-vkurse-versiia-19",
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
