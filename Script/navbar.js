let nav = document.getElementById("nav");
let navbar = () => {
  let navigationBar = ` <div>
      <a href="index.html">Home</a>
      <a href="SignUp.html">SignUp</a>
      <a href="Login.html">Login</a>
    </div>`;
  nav.innerHTML = navigationBar;
};
navbar();
