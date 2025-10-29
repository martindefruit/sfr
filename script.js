document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.classList.add('light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    });
  }
});


