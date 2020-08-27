var navMain = document.querySelector('.main-nav');
var navMenu = document.querySelector('.main-nav__inner');
var showMenu = navMain.querySelector('.main-nav__burger-wrap');
var closeMenu = navMenu.querySelector('.main-nav__close');
var burger = showMenu.querySelector('.main-nav__burger');

navMain.classList.remove('main-nav_nojs');
navMenu.classList.add('main-nav_closed');

showMenu.addEventListener('click', function () {
  if (burger.classList.contains('main-nav__burger')) {
    navMenu.classList.remove('main-nav_closed');
    burger.classList.remove('main-nav__burger');
    burger.classList.add('main-nav__close-button');
    burger.setAttribute('aria-label', 'Закрыть меню');
  } else {
    navMenu.classList.add('main-nav_closed');
    burger.classList.remove('main-nav__close-button');
    burger.classList.add('main-nav__burger');
    burger.setAttribute('aria-label', 'Открыть меню');
  }
});
