// Smooth active-link highlight on scroll
const links = document.querySelectorAll('.nav-left a');
const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));

window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;
  sections.forEach((sec, i) => {
    if (sec && sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});

// Animate skill bars on view
const bars = document.querySelectorAll('.bar span');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.style.width; // trigger transition
    }
  });
});
bars.forEach(b => observer.observe(b));
