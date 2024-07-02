export function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

export function initializeThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', toggleTheme);
}
