let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let btnFechar = document.querySelector(".btn-fechar"); // Botão de fechar dentro do menu

// Abrir menu ao clicar no botão
btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
  overlay.style.display = "block"; // Exibe a sobreposição
});

// Fechar menu ao clicar no botão de fechar
btnFechar.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
  overlay.style.display = "none"; // Oculta a sobreposição
});

// Fechar menu ao clicar na sobreposição (overlay)
overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
  overlay.style.display = "none"; // Oculta a sobreposição
});

// Evitar que o menu feche quando o clique for dentro da área do menu
menu.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o evento de clique propague para o overlay
});

// Rolagem suave ao clicar em links do menu
document.querySelectorAll(".menu-mobile a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Remove o '#' do href
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth", // Rolagem suave
    });

    // Fechar o menu após o clique no link
    menu.classList.remove("abrir-menu");
    overlay.style.display = "none"; // Oculta a sobreposição
  });
});

// teste

// Selecionando o carrossel e a wrapper
const carousel = document.querySelector(".certificados-mobile");
const wrapper = document.querySelector(".certificados-wrapper");

// Índice do item visível
let currentIndex = 0;
const totalItems = document.querySelectorAll(".certificados-box").length;

// Função para mover para o próximo item
function moveToNext() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Voltar ao início quando alcançar o final
  }
  updateCarouselPosition();
}

// Função para mover para o item anterior
function moveToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Vai para o último item
  }
  updateCarouselPosition();
}

// Função para atualizar a posição do carrossel
function updateCarouselPosition() {
  const itemWidth = document.querySelector(".certificados-box").offsetWidth;
  wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Adicionando eventos de clique para as setas de navegação
carousel.addEventListener("click", function (e) {
  if (e.target === carousel.querySelector(".certificados-mobile:before")) {
    moveToPrev();
  } else if (
    e.target === carousel.querySelector(".certificados-mobile:after")
  ) {
    moveToNext();
  }
});

// Detectando toque para deslizar
let startX, endX;

carousel.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].pageX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].pageX;
  if (startX - endX > 50) {
    moveToNext(); // Deslizar para a esquerda
  } else if (endX - startX > 50) {
    moveToPrev(); // Deslizar para a direita
  }
});
