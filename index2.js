window.onload = function () {
  if (localStorage.getItem("access-token") == null) {
    window.location.href = "./index.html";
  }
};
let fullName = document.getElementById("fullname");
let password = document.getElementById("password");
let email = document.getElementById("email");
let logout = document.getElementById("logout");
let signUp = document.getElementById("signup");
const user = JSON.parse(localStorage.getItem("userState"));
fullName.innerHTML += user.fullName;
password.innerHTML += user.password;
email.innerHTML += user.email;

logout.addEventListener("click", logOut);
signUp.addEventListener("click", signup);

function logOut(e) {
  localStorage.clear();
  window.location.href = "./index.html";
}

function signup(e) {
  if (localStorage.getItem("access-token") == null) {
    window.location.href = "./index.html";
  } else {
    e.preventDefault();
  }
}
