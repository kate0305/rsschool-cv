const iconMenu = document.querySelector('.menu-icon');
const nav = document.querySelector('.header-navigation');
const menuLinks = document.querySelectorAll('.navigation__link');

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    nav.classList.toggle('active'); 
  });
}

if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
   link.addEventListener('click', clickMenu);
  });

  function clickMenu() {
    if (iconMenu.classList.contains('active')) {
      document.body.classList.remove('lock');
      iconMenu.classList.remove('active');
      nav.classList.remove('active');
    };
  }
}

console.log(`
Самооценка (150.150):
1. Вёрстка валидная (10/10)
2. Вёрстка семантическая (20/20)
3. Для оформления СV используются css-стили (10/10)
4. Контент размещается в блоке, который горизонтально центрируется на странице (10/10)
5. Вёрстка адаптивная (10/10)
6. Есть адаптивное бургер-меню (10/10)
7. На странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt (10/10)
8. Контакты для связи и перечень навыков оформлены в виде списка ul > li (10/10)
9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, пример кода, информацию об образовании и уровне английского (10/10)
10. CV содержит пример вашего кода с подсветкой кода (10/10)
11. CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий (10/10)
12. CV выполнено на английском языке (10/10)
13. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (10/10)
14. Есть видеорезюме автора CV на английском языке (0/10)
    - нет видеорезюме (0)
15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию
`);