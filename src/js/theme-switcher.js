const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};
savedThemeSetings();
checkboxRef.addEventListener('change', themeSwitcher);

function themeSwitcher(event) {
  if (event.target.checked) {
    themeStyle('dark', 'light');
  } else {
    themeStyle('light', 'dark');
  }
}

function savedThemeSetings() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    checkboxRef.setAttribute('checked', true);
    themeStyle('dark', 'light');
  } else if (theme === 'light') {
    themeStyle('light', 'dark');
  }
}

function themeStyle(colorSet, colorRemove) {
  localStorage.setItem('theme', colorSet);
  bodyRef.classList.add(Theme[colorSet]);
  bodyRef.classList.remove(Theme[colorRemove]);
}
