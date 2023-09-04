const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const email = document.querySelector("#email");
const whatsapp = document.querySelector("#whatsapp");

linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/samuel-laurindo-de-lima-545a40255/");
});

github.addEventListener("click", () => {
  window.open("https://github.com/sx1n");
});

email.addEventListener("click", async () => {
  await navigator.clipboard.writeText("contato.samuellaurindo@gmail.com");
  Toastify({
    close: true,
    text: "Email copiado para sua Área de Transferência",
    duration: 3000,
    stopOnFocus: true,
    gravity: "top",
    backgroundColor: "var(--primary-color)",
  }).showToast();
});

whatsapp.addEventListener("click", () => {
  window.open("https://wa.me/5521980742937?text=Olá%20Samuel");
})
