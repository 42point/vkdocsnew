import { defineConfig } from "vitepress";

// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox";

import imageFigures from "markdown-it-image-figures";

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

      ym(93965891, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true
      });`,
    ],
    [
      "noscript",
      {},
      `<div><img src="https://mc.yandex.ru/watch/93965891" style="position:absolute; left:-9999px;" alt="" /></div>`,
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
          {
            text: "Как подключиться",
            link: "kak-podkliucitsia-k-platforme-vkurse",
          },
          {
            text: "Пробный период",
            link: "kak-effektivno-ispolzovat-probnyi-period-dlia-kommerceskogo-tarifa",
          },
          {
            text: "Приложения ВКУРСЕ",
            link: "ustanovka-prilojhenii",
          },
        ],
      },
      {
        text: "Вебинары",
        base: "/vebinar/vebinar-",
        collapsed: true,
        items: [
          {
            text: "Подготовка к Вебинару",
            items: [
              {
                text: "WEB-клиент в браузер",
                link: "prepare-web",
              },
              {
                text: "Десктоп-клиент",
                link: "",
              },
            ],
          },

          {
            text: "Возможности во время вебинара",
            items: [
              {
                text: "В WEB-клиенте",
                link: "vozmojhnosti-web",
              },
              {
                text: "Основные",
                link: "vozmojhnosti-osnovnii",
              },
              {
                text: "Права участников",
                link: "nabor-prav-ucastnikov-vebinar-perenesti-v-razdel-dlia-organizatorov",
              },
            ],
          },
          {
            text: "Настройка оборудования",
            items: [
              {
                text: "WEB-клиент",
                link: "kak-nastroit-oborudovanie",
              },
            ],
          },
          { text: "Настройки Вебинара", link: "nastroiki-vebinara" },
        ],
      },
      {
        text: "Встречи",
        base: "/vstrechi/vstrechi-",
        collapsed: true,
        items: [
          {
            text: "Подготовка к встрече",
            items: [
              {
                text: "WEB-клиент",
                link: "prepare-web",
              },
              {
                text: "Десктоп клиент",
                link: "prepare-desktop",
              },
            ],
          },
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
            text: "Релиз 21",
            items: [
              {
                text: "Релиз 21.0",
                link: "/release/relizy-po-vkurse-versiia-21",
              },
            ],
          },
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
        base: "help/help-",
        collapsed: true,
        items: [
          {
            text: "Помощь участникам",
            link: "uchastnikam",
          },
          {
            text: "Часто задаваемые вопросы (мероприятия)",
            link: "faq",
          },
        ],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
      md.use(imageFigures, {
        figcaption: "title",
        copyAttrs: "^class$",
      });
    },
  },
});
