window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  // Скрываем все элементы, начиная с а элемента
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  // Скрываем все кроме первого элемента, так как у первого элемента индекс [0], то передаем в функцию 1
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  // При клике на родитель, проверяем на какой элемент кликнули, и выполняем действия
  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          // Подскавляем в функцию только тот индекс элемента, на который кликнули. 
          showTabContent(i);
          // Так как вы скрыли все элементы, и показали только нужный, выходим из цикла
          break;
        }
      }
    }

  });
});