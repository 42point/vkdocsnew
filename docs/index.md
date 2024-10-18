---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ВКУРСЕ"
  text: "Платформа для онлайн мероприятий"
  tagline: База знаний, инструкции и помощь
  actions:
    - theme: brand
      text: Встречи
      link: /vstrechi/vstrechi-prepare-web
    - theme: alt
      text: Вебинары
      link: /vebinar/vebinar-prepare
    - theme: alt
      text: Лекции
      link: /leckii/lekcii-prepare
  image:
    src: "vkursik.png"
    alt: VKURSE
features:
  - title: Устраивайте совещания
    details: 300+ видео на одном экране, виртуальные переговорные 24/7 и встроенный мессенджер (звонки, чаты, файлообмен, групповые/1х1).
  - title: Организуйте обучение
    details: Групповые конференции, Опросы, Файловое хранилище, мгновенная запись с опцией автозапуска, белая доска
  - title: Проводите конференции
    details: До 10 000 участников, Посадочная страница, Конструктор форм регистрации, Валидация зарегистрированных участников мероприятия, комната ожидания.
---

<style>
:root {
  --vp-home-hero-name-color: transparent; !important
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff); !important

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); !important
  --vp-home-hero-image-filter: blur(40px); !important
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px); !important
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px); !important
  }
}
</style>
