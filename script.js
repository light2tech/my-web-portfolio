const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-links a');

if (menuIcon && header) {
  menuIcon.addEventListener('click', () => {
    header.classList.toggle('open');
    menuIcon.classList.toggle('fa-xmark');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header?.classList.remove('open');
    menuIcon?.classList.remove('fa-xmark');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    header?.classList.remove('open');
    menuIcon?.classList.remove('fa-xmark');
  }
});
