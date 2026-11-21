// Shared theme + keyboard navigation for the CMD Meeting deck's new pages.
(function () {
  // Same storage key as the CXO deck, so the theme carries across pages.
  if ((localStorage.getItem('deck-theme') || 'dark') === 'light') {
    document.documentElement.classList.add('light');
  }
  window.toggleTheme = function () {
    const light = document.documentElement.classList.toggle('light');
    localStorage.setItem('deck-theme', light ? 'light' : 'dark');
  };
  document.addEventListener('keydown', function (e) {
    const prev = document.querySelector('[data-prev]');
    const next = document.querySelector('[data-next]');
    if ((e.key === 'ArrowRight' || e.key === ' ') && next) { e.preventDefault(); location.href = next.getAttribute('href'); }
    if (e.key === 'ArrowLeft' && prev) { location.href = prev.getAttribute('href'); }
    if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen();
    }
  });
})();
