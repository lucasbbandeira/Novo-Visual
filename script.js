const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Os dados do formulário ficam disponíveis para o cliente informar por telefone.
  // Como não há integração com WhatsApp, o envio inicia uma ligação direta para o salão.
  window.location.href = "tel:+554133536127";
});

document.getElementById("year").textContent = new Date().getFullYear();