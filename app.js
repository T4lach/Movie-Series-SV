const form = document.getElementById("loginForm");
const feedback = document.getElementById("feedback");

const validCredentials = {
  username: "admin",
  password: "cine123",
};

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value;

  if (username === validCredentials.username && password === validCredentials.password) {
    feedback.textContent = "Acceso correcto. Redirigiendo...";
    feedback.className = "feedback success";

    setTimeout(() => {
      window.location.href = "landing-servidor.html";
    }, 600);
    return;
  }

  feedback.textContent = "Usuario o contraseña incorrectos.";
  feedback.className = "feedback error";
});
