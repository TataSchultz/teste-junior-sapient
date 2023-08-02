window.onload = function() {   
  // Abrir e fechar o menu
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    console.log('Clique no botão do menu');
    console.log('Menu ativo:', menu.classList.contains('menu-active'));
  });
};
//  Reproduzir o vídeo ao clicar na imagem de capa
 const videoCover = document.getElementById('video-cover');
 const videoPlayer = document.getElementById('video-player');

 videoCover.addEventListener('click', function () {
   videoCover.style.display = 'none'; 
   videoPlayer.play(); 
 });


