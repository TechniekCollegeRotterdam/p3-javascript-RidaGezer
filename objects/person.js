// Step 1
let output = document.querySelector (".output");

let person = {
  name: "Eric",
  age: 30,
  birthdate: "01-01-1990",
  gender: "male",
  alive: true,
  hobbies: ["reading", "sports", "cooking", "traveling"],

  changeName: function (newName) {
    this.name = newName;
  },

  changeAliveStatus: function (stillAlive) {
    this.alive = false;
  },

  addHobby: function (newHobby) {
    this.hobbies.push(newHobby);
  },
};

output.innerHTML = `

<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.birthdate}</p>
<p>${person.gender}</p>
<p>${person.alive}</p>
<p>${person.hobbies}</p>

`;

