var signUpsection = document.getElementById("form-container sign-up-container");
var signInsection = document.getElementById("form-container sign-in-container");
var buttonSwitch = document.getElementById("signUp");
var oldTitle = document.getElementById("title");
var oldParagraph = document.getElementById("paragraph");

// hiermee geef ik aan wat er geswitched moet worden wanneer ik op de button click
var signInContainer = document.querySelector(".sign-in-container");
var signUpContainer = document.querySelector(".sign-up-container");
var panelInput = document.querySelector(".overlay-panel");

var oldParagraph = document.querySelector("oldParagraph");
var oldTitle = document.querySelector("oldTitle");

function removeOldElements() {
  oldParagraph.remove();
  oldTitle.remove();
  console.log(oldParagraph);
}



// hier mee roep ik de registratie data op om het te showen aan de rechter kant van de page
function showData() {
  var fullName = document.getElementById("fullName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;

  var nameTitle = document.createElement("h1");
  nameTitle.innerHTML = "Welcome " + fullName;
  panelInput.appendChild(nameTitle);

  var phoneOutput = document.createElement("p");
  phoneOutput.innerHTML = phoneNumber;
  panelInput.appendChild(phoneOutput);

  var emailOutput = document.createElement("p");
  emailOutput.innerHTML = email;
  panelInput.appendChild(emailOutput);

  var fullNameOutput = document.createElement("p");
  fullNameOutput.innerHTML = fullName;
  panelInput.appendChild(fullNameOutput);
}

// dit is een event listener om de sections te laten switchen wanneer ik op de button click
var signUpButton = document.querySelector("#signUp");
signUpButton.addEventListener("click", function () {
  signInContainer.style.display = "flex";
  signUpContainer.style.display = "none";
  showData();
  removeOldElements()  
});
