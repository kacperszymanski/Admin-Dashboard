function setTheme() {
  const root = document.documentElement;
  const themeName = document.querySelector('.theme-name');
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  themeName.textContent = newTheme;
}

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', setTheme);

setTheme();
