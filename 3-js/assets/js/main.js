
window.onload = function() {
// Abrir e fechar o menu  
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    menu.classList.toggle('menu', !menu.classList.contains('menu-active'));
  });
};

//  Reproduzir o vídeo ao clicar na imagem de capa
 const videoCover = document.getElementById('video-cover');
 const videoPlayer = document.getElementById('video-player');

 videoCover.addEventListener('click', function () {
   videoCover.style.display = 'none'; 
   videoPlayer.play(); 
 });

// Sistema de sanfona para a lista 
  const accordionItems = document.querySelectorAll(".accordion .item");
  accordionItems.forEach((item) => {
    const title = item.querySelector(".title");
    const description = item.querySelector(".description");
    title.addEventListener("click", () => {
      item.classList.toggle("-active");
      description.classList.toggle("-active");
});

// // Abrir e fechar modal com a foto
// const buttonModal = document.getElementById("button-modal");
// const modalWiki = document.querySelector(".modal-wiki");
// const closeModal = document.getElementById("close-modal");

// closeModal.addEventListener("click", () => {
//   modalWiki.classList.remove("-active");
//   console.log(modalWiki)
// });

// buttonModal.addEventListener("click", () => {
//   modalWiki.classList.add("-active");
// });


});


