function setaImagem() {
    var settings = {
      primeiraImg: function() {
        elemento = document.querySelector('.slide:first-child');
        elemento.classList.add('ativo');
      },
  
      slide: function() {
        elemento = document.querySelector('.ativo');
  
        if (elemento.nextElementSibling) {
          elemento.nextElementSibling.classList.add('ativo');
          elemento.classList.remove('ativo');
        } else {
          elemento.classList.remove('ativo');
          settings.primeiraImg();
        }
      },
  
      proximo: function() {
        clearInterval(intervalo);
        elemento = document.querySelector('.ativo');
  
        if (elemento.nextElementSibling) {
          elemento.nextElementSibling.classList.add('ativo');
          elemento.classList.remove('ativo');
        } else {
          elemento.classList.remove('ativo');
          settings.primeiraImg();
        }
        intervalo = setInterval(settings.slide, 6000);
      },
  
      anterior: function() {
        clearInterval(intervalo);
        elemento = document.querySelector('.ativo');
  
        if (elemento.previousElementSibling) {
          elemento.previousElementSibling.classList.add('ativo');
          elemento.classList.remove('ativo');
        } else {
          elemento.classList.remove('ativo');
          elemento = document.querySelector('.slide:last-child');
          elemento.classList.add('ativo');
        }
        intervalo = setInterval(settings.slide, 6000);
      }
    }
  
    //chama o slide
    settings.primeiraImg();
  
    //chama o slide à um determinado tempo
    var intervalo = setInterval(settings.slide, 6000);
    document.querySelector('.next').addEventListener('click', settings.proximo, false);
    document.querySelector('.prev').addEventListener('click', settings.anterior, false);
  }
  
  window.addEventListener('load', setaImagem, false);
  