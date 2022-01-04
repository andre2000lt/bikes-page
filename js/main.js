'use strict';

// Переключатель меню

// var headerNav = document.querySelector('.header__nav');
// var logo = document.querySelector('.logo');

(function () {
  var burger = document.querySelector('.burger');
  var headerTop = document.querySelector('.header__top');
  var header = document.querySelector('.header');

  function toggleBurger(action) { // action = {open, close}
    if (action === 'open') {
      if (!(burger.classList.contains('burger--open'))) {
        burger.classList.add('burger--open');
      }
    }

    if (action === 'close') {
      if (burger.classList.contains('burger--close')) {
        burger.classList.remove('burger--open');
      }
    }
  }

  function toggleMenu(action) { // action = {hide, show}
    if (action === 'hide') {
      if (headerTop.classList.contains('header__top--tablet-visible')) {
        headerTop.classList.remove('header__top--tablet-visible');
      }
    }

    if (action === 'show') {
      if (!headerTop.classList.contains('header__top--tablet-visible')) {
        headerTop.classList.add('header__top--tablet-visible');
      }
    }
  }

  function hideMenu() {
    toggleMenu('hide');

    toggleBurger('open');
  }


  function showMenu() {
    toggleMenu('show');
    toggleBurger('close');
  }

  if (burger) {
    header.onload = hideMenu();

    burger.addEventListener('click', function () {
      if (burger.classList.contains('burger--open')) {
        showMenu();
      } else {
        hideMenu();
      }
    });
  }

})();
