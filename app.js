const inputName = document.getElementById("name");
const inputValue = document.getElementById("value");
const showButton = document.querySelector(".display-cookie-btn");
const createButton = document.querySelector(".create-cookie-btn");

console.log(inputName, inputValue, showButton, createButton);
let name;
let value
inputName.addEventListener("input", (e) => {

  nom = e.target.value;

});
inputValue.addEventListener("input", (e) => {
   value = e.target.value;

});


createButton.addEventListener("click", createCookie);

function createCookie(){
const cookie = document.createElement("div");
cookie.className = "cookie";
cookie.innerHTML = `
      <p class="cookie__name"></p>
      <p class="cookie__value"></p>
`
}