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

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  const texto = [
    "Olá! Gostaria de falar com o Novo Visual Cabeleireiro.",
    "",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Serviço: ${servico}`,
    mensagem ? `Mensagem: ${mensagem}` : ""
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/5541999837261?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
