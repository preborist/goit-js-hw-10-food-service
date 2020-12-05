const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
savedThemeSetings();
checkboxRef.addEventListener('change', themeSwitcher);

function themeSwitcher(event) {
  if (event.target.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
}

function savedThemeSetings() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    checkboxRef.setAttribute('checked', true);
    darkTheme();
  } else if (theme === 'light') {
    lightTheme();
  }
}

function darkTheme() {
  localStorage.setItem('theme', 'dark');
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
}

function lightTheme() {
  localStorage.setItem('theme', 'light');
  bodyRef.classList.remove(Theme.DARK);
  bodyRef.classList.add(Theme.LIGHT);
}
