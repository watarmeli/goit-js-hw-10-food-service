import './css/styles.css';
import templateItems from './templates/template-items.hbs';
import menuItems from './js/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const menu = document.querySelector('.menu.js-menu');
const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-toggle');

// Добавил разметку
const makrup = templateItems(menuItems);
menu.innerHTML = makrup;

// Проверка localStorage, применение выбранной ранее темы.

const currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
    localStorage.setItem('theme', LIGHT);
    body.classList.add(LIGHT)
} else {
    body.classList.add(currentTheme)
};

if (currentTheme === DARK) {
    switcher.checked = true;
};

// Функционал переключателя

switcher.addEventListener('change', themeSwitch);

function themeSwitch() {
    if (switcher.checked) {
        body.classList.replace(LIGHT, DARK);
        localStorage.setItem('theme', DARK);
    } else {
        body.classList.replace(DARK, LIGHT);
        localStorage.setItem('theme', LIGHT);
    };
};