let output = document.querySelector(".output")

const book = {
    
    titel: "The 48 laws of power",
    auteur: "Robert Greene",
    distributer: "Profile books",
    year: 2002, 
    sold: 20000,
    price: "12 Euro"

};

output.innerHTML = `
<p>${book.titel}</p>
<p>${book.auteur}</p>
<p>${book.distributer}</p>
<p>${book.year}</p>
<p>${book.sold}</p>
<p>${book.price}</p>
`
