// All content remains visible if JavaScript is unavailable.
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.documentElement.classList.add('motion-ready');
  items.forEach(item => {
    if (item.getBoundingClientRect().top > window.innerHeight) item.classList.add('pending');
    observer.observe(item);
  });
}
