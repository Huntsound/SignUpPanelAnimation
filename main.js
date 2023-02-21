const container = document.querySelector(".container");
const SignUpButton = document.getElementById("signup");
const SignInButton = document.getElementById("signin");

SignUpButton.addEventListener("click", () => container.classList.add("active"));
SignInButton.addEventListener("click", () => container.classList.remove("active"));