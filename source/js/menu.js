var navMain = document.querySelector('.main-nav');
var navMenu = document.querySelector('.main-nav__inner');
var showMenu = navMain.querySelector('.main-nav__show-menu');
var closeMenu = navMenu.querySelector('.main-nav__close');

navMain.classList.remove('main-nav_nojs');
navMenu.classList.add('main-nav_closed');

showMenu.addEventListener('click', function() {
  navMenu.classList.remove('main-nav_closed');
});

closeMenu.addEventListener('click', function() {
  navMenu.classList.add('main-nav_closed');
})
