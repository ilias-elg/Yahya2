const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".password-toggle");
const loginForm = document.querySelector("#login-form");
const formNotice = document.querySelector("#form-notice");

passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
  passwordToggle.setAttribute(
    "aria-label",
    isVisible ? "Afficher le mot de passe" : "Masquer le mot de passe",
  );
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNotice.textContent =
    "Cette interface est prête ; la connexion sera activée avec le backend.";
});
