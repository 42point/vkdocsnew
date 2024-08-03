---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ВКУРСЕ"
  text: "Платформа для онлайн мероприятий"
  tagline: База знаний
  actions:
    - theme: brand
      text: Встречи
      link: /meetings/
    - theme: alt
      text: Вебинары
      link: /vebinar/
    - theme: alt
      text: Мобильные приложения
      link: /apps/iOS/
  image:
    src: "vkursik.png"
    alt: VKURSE
features:
  - title: Совещания
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Обучения
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Конференции
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
