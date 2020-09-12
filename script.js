const form = document.getElementById("form");
const messages = document.getElementById("messages");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  let errors = [];
  // if (username.value === "" || username.value == null) {
  //   errors.push("Username is required");
  // }
  if (!(username.value.length >= 6 && username.value.length <= 20)) {
    errors.push("Username must be 6-20 characters");
  }
  if (!(password.value.length >= 6 && password.value.length <= 20)) {
    errors.push("Password must be 6-20 characters");
  }
  if (password.value === "password") {
    errors.push("Password can't be 'password'");
  }
  if (errors.length > 0) {
    e.preventDefault();
    messages.innerHTML = errors.join("</br>");
  }
});
