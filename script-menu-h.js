const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu i');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', function() {
  menu.classList.add('show');
  hamburgerMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function() {
  menu.classList.remove('show');
  hamburgerMenu.style.display = 'block';
  closeMenu.style.display = 'none';
});
