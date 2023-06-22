const registrationform = document.querySelector("#registrations");
const registrationURL = `http://localhost:3000/registration`;
console.log(registrationURL);
let registrationData = [];
const registrationFormulier = document.querySelector("#registrationform");

fetch(`${registrationURL}`)
  .then((response) => response.json())
  .then((registrations) => {
    let out = "";
    for (let registration of registrations) {
      out += `
      <div class="para">
      <p>${registration.name}</p>
      <p>${registration.surename}</p>
      <p>${registration.place}</p>
      <p>${registration.number}</p>
      <p>${registration.mail}</p>
      <button class="buttonadmin" data-id="${registration.id}" id="delete-${registration.id}" data-action="delete">Delete</button>
      </div>
 `;
    }
    registrationform.innerHTML = out;
  });

registrationform.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.dataset.action === "delete") {
    console.log(e.target.dataset.action);

    document.querySelector(`#delete-${e.target.dataset.id}`).remove();

    fetch(`${registrationURL}/${e.target.dataset.id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});
