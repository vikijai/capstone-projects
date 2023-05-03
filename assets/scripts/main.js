//location.pathname is to get the url and replace in header Elements
var pathname = [" ", " "];
//console.log(window.location.pathname);
if (window.location.pathname == '/about-us.html') {
  pathname[0] = "Home";
  pathname[1] = "Contact Us";
  console.log(pathname);
}
else if (window.location.pathname == '/contact-us.html') {
  pathname[0] = "Home";
  pathname[1] = "About Us";
  console.log(pathname);
}
else {
  pathname[0] = "About Us";
  pathname[1] = "Contact Us";
  console.log(pathname);

}
//Header Elemets render
let headerElements = document.getElementById("myHeader");
headerElements.innerHTML =
  `<a href="./index.html"><img src="./assets/images/youtube-logo.png" alt="Youtube logo">
      <span>Youtube</span>
    </a>
    <div id="primarySearch">
      <input class="search-input" type="search" placeholder="Search" aria-label="Search">
      <button type="button" aria-label="Searchbutton">
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </button>
      <button type="button" aria-label="Microphone"><i class="fa-solid fa-microphone"></i></button>
      <button type="button" aria-label="Signin"><i class="fa-solid fa-user"></i> Sign in</button>
    </div>
      <nav id="primaryNav">
        <ul>
          <li>
            <a aria-label="DarkMode" href="#"><i id="dark" class="fas fa-fill-drip"></i></a>
          </li>
          <li>
            <a href="./about-us.html">${pathname[0]}</a>
          </li>
          <li>
            <a href="./contact-us.html">${pathname[1]}</a>
          </li>
        </ul>
      </nav>`;
//console.log(headerElements)

//Footer Elements render
let footerElements = document.getElementById("footerNav");
footerElements.innerHTML =
  `<ul>
    <li>
      <a href="./index.html">Home</a>
    </li>
    <li>
      <a href="./about-us.html">About us</a>
    </li>
    <li>
      <a href="./contact-us.html">Contact us</a>
    </li>
  </ul>`

//onclick function to switch between dark-mode
let darkIcon = document.getElementById("dark");
darkIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");
}