const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu i');
const menu = document.querySelector('.menu-h');
const mainSection = document.querySelector('main');
// const menuSlide = document.getElementById('menuSlide').style.paddingTop = "50px";
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', function() {
  menu.classList.add('show');
  hamburgerMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  mainSection.classList.add('menu-open');
});

closeMenu.addEventListener('click', function() {
  menu.classList.remove('show');
  hamburgerMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  mainSection.classList.remove('menu-open');
});




// Event listener para fechar o menu ao clicar fora dele
body.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    menu.classList.remove('show');
    mainSection.classList.remove('menu-open');
    body.classList.remove('menu-open');
    hamburgerMenu.style.display = 'block';
    closeMenu.style.display = 'none';

  }
});

// Event listener para fechar o menu ao rolar a página
window.addEventListener('scroll', function() {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    mainSection.classList.remove('menu-open');
    body.classList.remove('menu-open');
    hamburgerMenu.style.display = 'block';
    closeMenu.style.display = 'none';

  }
});

// seleciona o item do menu que contém o submenu
const menuItem = document.querySelector('.menu > li');

// seleciona o submenu
const submenu = document.querySelector('.menu-dropdown');

// adiciona um evento de clique ao item do menu
menuItem.addEventListener('click', () => {
  // alterna a classe 'show' no submenu
  submenu.classList.toggle('show');
});

