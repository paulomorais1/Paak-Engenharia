function expandImage(img) {
  // Obtém o caminho da imagem clicada
  var imgSrc = img.src;
  
  // Define a imagem expandida como a imagem clicada
  var expandedImg = document.getElementById("expandedImg");
  expandedImg.src = imgSrc;
  
  // Adiciona a classe "active" ao container da imagem expandida para exibi-la
  var galeryImagens = document.querySelector(".galery-imagens");
  galeryImagens.classList.add("active");
}

function closeExpandedImage() {
  // Remove a classe "active" do container da imagem expandida para ocultá-la
  var galeryImagens = document.querySelector(".galery-imagens");
  galeryImagens.classList.remove("active");
}
window.addEventListener("DOMContentLoaded", function() {
  // Exibe a imagem expandida no início
  var expandedImg = document.getElementById("expandedImg");
  expandedImg.style.display = "block";
  
  // Adiciona a classe "active" ao container da imagem expandida para exibi-la
  var galeryImagens = document.querySelector(".galery-imagens");
  galeryImagens.classList.add("active");
});
