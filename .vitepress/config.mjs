import { defineConfig } from "vitepress";
// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox";
import imageFigures from "markdown-it-image-figures";
import markdownItMark from "markdown-it-mark";
import markdownItDeflist from "markdown-it-deflist";
import markdownItAbbr from "markdown-it-abbr";
import markdownItFootnote from "markdown-it-footnote";

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
  title: "ВКУРСЕ | База знаний ",
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
  description: "База знаний платформы ВКУРСЕ",
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // lastUpdated: true,
    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
        hourCycle: "h23",
      },
    },

    footer: {
      //   message: "Released under the MIT License.",
      copyright: "АО ВКУРСЕ © 2024",
    },

    logo: { src: "/logo.svg", width: 24, height: 24 },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            // используйте ключ `root`, если хотите перевести локаль по умолчанию
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск",
              },
              modal: {
                displayDetails: "Отобразить подробный список",
                resetButtonTitle: "Сбросить поиск",
                backButtonTitle: "Закрыть поиск",
                noResultsText: "Нет результатов по запросу",
                footer: {
                  selectText: "выбрать",
                  selectKeyAriaLabel: "выбрать",
                  navigateText: "перейти",
                  navigateUpKeyAriaLabel: "стрелка вверх",
                  navigateDownKeyAriaLabel: "стрелка вниз",
                  closeText: "закрыть",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
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
        base: "/start",
        collapsed: true,
        items: [
          {
            text: "Как подключиться",
            link: "/kak-podkliucitsia-k-platforme-vkurse/",
          },
          {
            text: "Пробный период",
            link: "/kak-effektivno-ispolzovat-probnyi-period-dlia-kommerceskogo-tarifa/",
          },
          {
            text: "Приложения ВКУРСЕ",
            link: "/ustanovka-prilojhenii/",
          },
        ],
      },
      {
        text: "Вебинары",
        base: "/vebinar/",
        collapsed: true,
        items: [
          {
            text: "Подготовка к Вебинару",
            items: [
              {
                text: "WEB-клиент в браузере",
                link: "prepare-web/",
              },
              // {
              //   text: "Десктоп-клиент",
              //   link: "",
              // },
            ],
          },

          {
            text: "Возможности во время вебинара",
            items: [
              {
                text: "WEB-клиент в браузере",
                link: "vozmojhnosti-web/",
              },
              {
                text: "Основные",
                link: "vozmojhnosti-osnovnii/",
              },
              {
                text: "Права участников",
                link: "nabor-prav-ucastnikov-vebinar-perenesti-v-razdel-dlia-organizatorov/",
              },
            ],
          },
          {
            text: "Настройка оборудования",
            items: [
              {
                text: "WEB-клиент в браузере",
                link: "kak-nastroit-oborudovanie/",
              },
            ],
          },
          { text: "Настройки Вебинара", link: "nastroiki-vebinara/" },
        ],
      },
      {
        text: "Встречи",
        base: "/vstrechi/",
        collapsed: true,
        items: [
          {
            text: "Подготовка к встрече",
            items: [
              {
                text: "WEB-клиент",
                link: "prepare-web/",
              },
              {
                text: "Десктоп клиент",
                link: "prepare-desktop/",
              },
            ],
          },
          {
            text: "Возможности при проведении встреч",
            items: [
              {
                text: "WEB-клиент",
                link: "vozmojhnosti-web/",
              },
              {
                text: "Десктоп-клиент",
                link: "vozmojhnosti-desktop/",
              },
              {
                text: "Основные-возможности",
                link: "vozmojhnosti-osnovnii/",
              },
              {
                text: "Права учатников встреч",
                link: "nabor-prav-ucastnikov-vstreca-perenesti-v-razdel-dlia-organizatorov/",
              },
            ],
          },
          // {
          //   text: "Настройка оборудования",
          //   link: "nastroika-oborudovaniia-Mgz/",
          // },
        ],
      },
      {
        text: "Лекции",
        base: "/lekcii/",
        collapsed: true,
        items: [
          {
            text: "Подготовка к лекции",
            items: [
              {
                text: "WEB-приложение ",
                link: "prepare-web/",
              },
              {
                text: "Десктоп-приложение ",
                link: "prepare-desktop/",
              },
            ],
          },
          {
            text: "Возможности при проведении лекции",
            items: [
              {
                text: "Возможности WEB-клиента",
                link: "vozmojhnosti-web/",
              },
              {
                text: "Возможности десктоп-клиента",
                link: "vozmojhnosti-desktop/",
              },
              {
                text: "Общие возможности",
                link: "vozmozhnosti-obchie/",
              },
              {
                text: "Права участников лекции",
                link: "prava-uchastnikov/",
              },
            ],
          },

          // {
          //   text: "Настройка оборудования",
          //   items: [
          //     {
          //       text: "Настрока WEB-клиента",
          //       link: "/",
          //     },
          //     {
          //       text: "Настройка десктоп-клиента",
          //       link: "/",
          //     },
          //   ],
          // },
        ],
      },
      {
        text: "Селектор",
        base: "/selektor/",

        collapsed: true,
        items: [
          {
            text: "Подготовка к селектору",
            items: [
              {
                text: "WEB-клиент в браузере",
                link: "podgotovka-k-selektoru-web/",
              },
              {
                text: "Десктоп-клиент",
                link: "podgotovka-k-selektoru-desktop/",
              },
            ],
          },
          {
            text: "Возможности при проведении селектора",
            items: [
              {
                text: "WEB-клиент в браузере",
                link: "vozmoznosti-selektora-web/",
              },
              {
                text: "Десктоп-клиент",
                link: "vozmoznosti-selektora-desktop/",
              },
              {
                text: "Основные-возможности",
                link: "osnovnii-vozmozhnosti/",
              },
              {
                text: "Права учатников селектора",
                link: "prava-uchastnikov-selektora/",
              },
            ],
          },
          {
            text: "Настройка оборудования",
            link: "",
          },
        ],
      },
      {
        text: "Мобильные приложения",
        collapsed: true,
        items: [
          {
            text: "Для iOS",
            link: "/apps/ios/",
          },
          {
            text: "Для Android",
            link: "/apps/android/",
          },
          // {
          //   text: "Как поставить",
          //   link: "/apps/ustanovka-prilozenii/",
          // },
        ],
      },
      {
        text: "Новости и Релизы",
        collapsed: true,
        items: [
          {
            text: "Новости",
            collapsed: true,
            items: [
              {
                text: "Новый функционал за Сентябрь",
                link: "/news/spisok-novogo-funkcionala-09-2024/",
              },
              {
                text: "Новый функционал за Август",
                link: "/news/spisok-novogo-funkcionala-08-2024/",
              },
            ],
          },
          {
            text: "Релиз 21",
            collapsed: true,
            items: [
              {
                text: "Релиз 21.10",
                link: "/release/relizy-po-vkurse-versiia-21-10",
              },
              {
                text: "Релиз 21.9",
                link: "/release/relizy-po-vkurse-versiia-21-9",
              },
              {
                text: "Релиз 21.8",
                link: "/release/relizy-po-vkurse-versiia-21-8",
              },
              {
                text: "Релиз 21.7",
                link: "/release/relizy-po-vkurse-versiia-21-7",
              },
              {
                text: "Релиз 21.6",
                link: "/release/relizy-po-vkurse-versiia-21-6",
              },
              {
                text: "Релиз 21.5",
                link: "/release/relizy-po-vkurse-versiia-21-5",
              },
              {
                text: "Релиз 21.4",
                link: "/release/relizy-po-vkurse-versiia-21-4",
              },
              {
                text: "Релиз 21.3",
                link: "/release/relizy-po-vkurse-versiia-21-3",
              },
              {
                text: "Релиз 21.2",
                link: "/release/relizy-po-vkurse-versiia-21-2",
              },
              {
                text: "Релиз 21.1",
                link: "/release/relizy-po-vkurse-versiia-21-1",
              },
              {
                text: "Релиз 21.0",
                link: "/release/relizy-po-vkurse-versiia-21",
              },
            ],
          },
          {
            text: "Релиз 20",
            collapsed: true,
            items: [
              {
                text: "Релиз 20.2",
                link: "/release/relizy-po-vkurse-versiia-20-2",
              },
              {
                text: "Релиз 20.1",
                link: "/release/relizy-po-vkurse-versiia-20-1",
              },
              {
                text: "Релиз 20",
                link: "/release/relizy-po-vkurse-versiia-20",
              },
            ],
          },
          {
            text: "Релиз 19",
            collapsed: true,
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
        base: "/help",
        collapsed: true,
        items: [
          {
            text: "Помощь участникам",
            link: "/uchastnikam/",
          },
          {
            text: "Часто задаваемые вопросы (мероприятия)",
            link: "/faq/",
          },
          {
            text: "Возможности платформы",
            items: [
              {
                text: "Аналитика по платформе ВКУРСЕ",
                link: "/vkurse-analitycs/",
              },
              {
                text: "Обзор возможностей платформы",
                link: "/vozmojnosti-platformy/",
              },
            ],
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
      md.use(markdownItFootnote);
      md.use(markdownItMark);
      md.use(markdownItDeflist);
      md.use(markdownItAbbr);
      md.use(imageFigures, {
        figcaption: "title",
        copyAttrs: "^class$",
      });
    },
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true,
    },
  },
});
