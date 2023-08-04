
window.onload = function() {
// Abrir e fechar o menu  
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
    menu.classList.toggle("menu", !menu.classList.contains("menu-active"));
  });
};

//  Reproduzir o vídeo ao clicar na imagem de capa
 const videoCover = document.getElementById("video-cover");
 const videoPlayer = document.getElementById("video-player");

 videoCover.addEventListener("click", function () {
   videoCover.style.display = "none"; 
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
});

// Pegar dados da API 
//Obs: Informaçao sobre atualizaçao da API enviada em 03/08 por Danilo Riedel
async function loadApi() {
  const response = await fetch("https://catfact.ninja/fact");
  if (!response.ok) {
      throw new Error("Erro ao carregar a informação!");
  }
  const getContent = await response.json();
  return getContent.fact;

}

function showInformation(data) {
  const extractElement = document.querySelector("#wiki .extract");
  extractElement.textContent = data;
}

async function showLoad() {
  try {
      const information = await loadApi();
      showInformation(information);
  } catch (error) {
      console.error("Ops! Ocorreu um erro", error);
  }
}

showLoad();

// Abrir e fechar foto 
const switchModal = () => {
  const modalWiki = document.querySelector(".modal-wiki");
  const btn = document.getElementById("button-modal");

  modalWiki.classList.toggle("modal-wiki-active");
  if (modalWiki.classList.contains("modal-wiki-active")) {
    btn.textContent = "Fechar"; 
  } else {
    btn.textContent = "Abrir foto";
  }
};

const btn = document.getElementById("button-modal");
btn.addEventListener("click", switchModal);

const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", switchModal);

window.onclick = function (event) {
  const modalWiki = document.querySelector(".modal-wiki");
  if (event.target === modalWiki) {
    switchModal();
  }
};







  
  
  
  












