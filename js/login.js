const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const loginPage = document.getElementById("login-page");

const params = new URLSearchParams(window.location.search);
const typeQuery = params.get('register')

if (typeQuery=='true') {
  loginPage.classList.add("right-panel-active");
}
else {
  loginPage.classList.remove("right-panel-active");
}

registerButton.addEventListener("click", () => {
  loginPage.classList.add("right-panel-active");
  document.title="Đăng ký"
});

loginButton.addEventListener("click", () => {
  loginPage.classList.remove("right-panel-active");
  document.title="Đăng nhập"

});