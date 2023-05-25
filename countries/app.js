let flags = document.querySelector(".flags");
let out = "";

fetch(`https://restcountries.com/v3.1/all/`)
  .then((response) => response.json())
  .then((countries) => {
    console.log(countries);
    for (let country of countries) {
      console.log(country.name.common);
      console.log(country.flags.png);
      out += `
      
      <div class = "flagscard">
      <p>"${country.name.common}"</p>
      <img class = "flagsimg" src="${country.flags.png}"></img>
      </div>

        `;
    }
    flags.innerHTML = out;
  });
