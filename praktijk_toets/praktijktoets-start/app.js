let signUpsection = document.getElementById("form-container sign-up-container");
let signInsection = document.getElementById("form-container sign-in-container");
let buttonSwitch = document.getElementById("signUp");
var oldTitle = document.getElementById("title");
var oldParagraph = document.getElementById("paragraph");

// hiermee geef ik aan wat er geswitched moet worden wanneer ik op de button click
let signInContainer = document.querySelector(".sign-in-container");
let signUpContainer = document.querySelector(".sign-up-container");
let panelInput = document.querySelector(".overlay-panel");

var oldParagraph = document.querySelector("oldParagraph");
var oldTitle = document.querySelector("oldTitle");

function removeOldElements() {
  oldParagraph.remove();
  oldTitle.remove();
  console.log(oldParagraph);
}



// hier mee roep ik de registratie data op om het te showen aan de rechter kant van de page
function showData() {
  let fullName = document.getElementById("fullName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let email = document.getElementById("email").value;

  let nameTitle = document.createElement("h1");
  nameTitle.innerHTML = "Welcome " + fullName;
  panelInput.appendChild(nameTitle);

  let phoneOutput = document.createElement("p");
  phoneOutput.innerHTML = phoneNumber;
  panelInput.appendChild(phoneOutput);

  let emailOutput = document.createElement("p");
  emailOutput.innerHTML = email;
  panelInput.appendChild(emailOutput);

  let fullNameOutput = document.createElement("p");
  fullNameOutput.innerHTML = fullName;
  panelInput.appendChild(fullNameOutput);
}

// dit is een event listener om de sections te laten switchen wanneer ik op de button click
let signUpButton = document.querySelector("#signUp");
signUpButton.addEventListener("click", function () {
  signInContainer.style.display = "flex";
  signUpContainer.style.display = "none";
  showData();
  removeOldElements()  
});
