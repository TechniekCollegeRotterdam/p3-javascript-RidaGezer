let title = document.getElementById("title");
let img = document.getElementById("img");
let button = document.getElementById("button");
let show = document.getElementById("show")

function removeImage(){
    title.style.color = "blue";
    img.style.display = "none";
}
function showImage(){
    title.style.color = "black";
    img.style.display = "block";
}

function calc(num, num2){
    let answer = num - num2;
    console.log(answer);
}

calc(7, 8);