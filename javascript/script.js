const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('blur');
    } else {
        navbar.classList.remove('blur');
    }
});
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    const delay = index * 150; // 150 ms stagger
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = `translateY(${[0, 24, -16, 24, 0][index]}px)`;
    }, delay);
  });
});
