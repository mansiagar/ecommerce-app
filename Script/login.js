import { baseUrl } from "./baseUrl.js";
let form = document.getElementById("Login");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = form.email.value;
  let password = form.password.value;

  let userObj = { email, password };

  // fetch api and post data into api
  fetch(`${baseUrl}/userdata`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      alert("something went wrong");
      console.log(err);
    });
});
