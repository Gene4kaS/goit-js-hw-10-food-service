import './styles.css'
import createMenu from './templates/menu.hbs';
import menu from './templates/menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const refs = {
    menuList: document.querySelector('.js-menu'),
    buttonToggle: document.querySelector('.theme-switch__toggle'),
    body: document.body,
    
};

// const localTheme = localStorage.getItem('Theme');

(function () {
    const markup = createMenu(menu);
    refs.menuList.insertAdjacentHTML('beforeend', markup);
    refs.body.classList.add(localStorage.getItem('Theme') ? localStorage.getItem('Theme') : Theme.LIGHT);
    refs.buttonToggle.checked = localStorage.getItem('Theme') === Theme.DARK;
})()

refs.buttonToggle.addEventListener('click', onChangeTheme);
function onChangeTheme(e) {
    if (e.target.checked) {
        toggleTheme(Theme.DARK, Theme.LIGHT);
    }
    else {
        toggleTheme(Theme.LIGHT, Theme.DARK);
    }
}

function toggleTheme(add, rem) {
    refs.body.classList.add(add);
    refs.body.classList.remove(rem);
    localStorage.setItem('Theme', add);
}