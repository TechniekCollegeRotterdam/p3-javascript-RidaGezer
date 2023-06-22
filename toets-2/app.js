const registrationform = document.querySelector("#registrations");
const registrationURL = `http://localhost:3000/registration`;
console.log(registrationURL);
let registrationData = [];
const registrationFormulier = document.querySelector("#registrationform");

registrationFormulier.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = registrationFormulier.querySelector("#name").value;
  const surenameInput = registrationFormulier.querySelector("#surename").value;
  const placeInput = registrationFormulier.querySelector("#place").value;
  const numberInput = registrationFormulier.querySelector("#number").value;
  const mailInput = registrationFormulier.querySelector("#mail").value;
  console.log(mailInput);

  fetch(`${registrationURL}`, {
    method: "POST",
    body: JSON.stringify({
      name: nameInput,
      surename: surenameInput,
      place: placeInput,
      number: numberInput,
      mail: mailInput,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });
});

