

let budget = 100; 
let product = 60;
let text = document.getElementById("text");



if (product < budget){
text.innerText = " u heeft genoeg geld";
text.style.color = "green";
}
else{
    text.innerText = "U heeft helaas niet genoeg geld"
    text.style.color = "rood"
}