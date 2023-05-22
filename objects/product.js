let output = document.querySelector(".output");

let product = {
  name: "Razer toetsenbord",
  price: 50,
  img: "./img/razertoetsenbord3.png",
};

output.innerHTML = `

<img src= ${product.img}></img>


`;
