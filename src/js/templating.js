import menuItems from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.menu.js-menu');

const markup = itemsTemplate(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);
