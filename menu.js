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

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".certificados .flex");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  const items = document.querySelectorAll(".certificados .certificados-box");
  const itemWidth = items[0].offsetWidth + 10; // Largura do item + o gap entre os cards

  nextBtn.addEventListener("click", () => {
    // Verifica se o container já chegou ao final
    if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
      // Calcula a posição de rolagem para o próximo card
      const nextScrollPosition = container.scrollLeft + itemWidth;

      // Rola suavemente para o próximo item e centraliza o card
      container.scrollTo({
        left: nextScrollPosition,
        behavior: "smooth",
      });
    }
  });

  prevBtn.addEventListener("click", () => {
    // Verifica se o container já chegou ao início
    if (container.scrollLeft > 0) {
      // Calcula a posição de rolagem para o card anterior
      const prevScrollPosition = container.scrollLeft - itemWidth;

      // Rola suavemente para o card anterior e centraliza o card
      container.scrollTo({
        left: prevScrollPosition,
        behavior: "smooth",
      });
    }
  });
});
