
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

const titles = document.querySelectorAll('.title');
const activeItem = document.querySelector('.item.-active')



activeItem.forEach((title) => {
  title.addEventListener('click', function () {
    // const description = this.nextElementSibling;
    const description = activeItem.querySelector('.description')
    description.classList.toggle('item-active');
    description.classList.add('description');
    console.log(description);
  });
});

// titles.forEach((title) => {
//   title.addEventListener('click', function () {
//     const description = document.querySelectorAll('.item');
//     console.log(description)
//     description.classList.toggle('item-active')
//     if (description.classList.contains('item-active')) {
//       description.classList.remove('item-active');
//     } else {
//       description.classList.add('item-active');
//     }
//   });
// });
// const titles = document.querySelectorAll('.title');

// titles.forEach((title) => {
//   title.addEventListener('click', function () {
//     const item = this.closest('.item');
//     const description = item.querySelector('.description');
    
//     console.log(description);
    
//     if (description.classList.contains('item-active')) {
//       description.classList.remove('item-active');
//     } else {
//       description.classList.add('item-active');
//     }
//   });
// });

