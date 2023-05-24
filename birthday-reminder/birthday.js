let output = document.querySelector(".output");
let title = document.querySelector(".title");
let clearallbutton = document.querySelector(".clearallbutton");

let out = ``;

fetch(`./birthday.json`)
  .then((response) => response.json())
  .then((persons) => {
    console.log(persons.lenght);
    for (let person of persons) {
      out += `
    
        <div class = "card">
         <div class = "info">
        <img src="${person.img}"></img>
        <div class ="tekst">
        <h1>${person.name}</h1>
        <p>${person.age}</p>
        </div>
        </div>
        </div>

         `;
    }
    title.innerHTML = persons.length + "Birthdays today";
    output.innerHTML = out;
  });

document.querySelector(".clearallbutton").addEventListener("click", clearPage);

function clearPage() {
  document.querySelector(".output").innerHTML = ``;

  output.innerHTML = "";
}
