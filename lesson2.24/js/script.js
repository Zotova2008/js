let menu = document.querySelector('.menu');
let menuItem = menu.querySelectorAll('.menu-item');
let body = document.querySelector('body');
let title = document.querySelector('#title');
let adv = document.querySelector('.adv');
let promptBox = document.querySelector('#prompt');
let menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

body.style.backgroundImage = 'url("img/apple_true.jpg")';
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundPosition = 'center';
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();

let promptQuestion = prompt('Ваше отношение к технике Apple', '');
promptBox.textContent = promptQuestion;