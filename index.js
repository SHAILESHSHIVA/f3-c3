window.onload = function () {
  if (localStorage.getItem("access-token") != null) {
    window.location.href = "./index2.html";
  }
};
let signUpButton = document.getElementById("signup");
let message = document.getElementById("error-success");
let profile = document.getElementById("profileLink");
function generateAccessToken() {
  let alpha = "0123456789ABCDEFGHIJabcdefghij";
  let token = "";
  for (let i = 0; i < 16; i++) {
    token += alpha.charAt(Math.floor(Math.random() * 30));
  }
  return token;
  console.log(token);
}

function signUp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (name == "" || email == "" || password == "" || confirmPassword == "") {
    message.style.color = "red";
    message.textContent = "Error : All the fields are mandatory";
  } else if (password != confirmPassword) {
    message.style.color = "red";
    message.textContent = "Error : Password do not match";
  } else {
    message.style.color = "green";
    message.innerHTML = "Successfully signed up!";
    const user = {
      fullName: name,
      email: email,
      password: password,
    };
    localStorage.setItem("userState", JSON.stringify(user));

    let access_token = generateAccessToken();
    localStorage.setItem("access-token", access_token);

    window.location.href = "./index2.html";
  }
}

function toProfile(e) {
  if (localStorage.getItem("access-token") != null) {
    window.location.href = "./index2.html";
  } else {
    e.preventDefault();
  }
}
signUpButton.addEventListener("click", signUp);
profile.addEventListener("click", toProfile);
