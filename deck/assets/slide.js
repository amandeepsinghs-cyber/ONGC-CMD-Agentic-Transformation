// Scales the 1920x1080 stage to the window and adds keyboard navigation.
(function () {
  function fit() {
    const s = document.querySelector('.stage');
    if (!s) return;
    const k = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    s.style.transform = 'translate(-50%, -50%) scale(' + k + ')';
  }
  window.addEventListener('resize', fit);
  document.addEventListener('DOMContentLoaded', fit);
  document.addEventListener('keydown', function (e) {
    const b = document.body.dataset;
    if ((e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') && b.next) { e.preventDefault(); location.href = b.next; }
    if ((e.key === 'ArrowLeft' || e.key === 'PageUp') && b.prev) { location.href = b.prev; }
    if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen();
    }
  });
})();
