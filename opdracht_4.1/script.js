let answer = document.getElementById("answer")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")



function multiply(){
    answer.innerText = Number(input1.value) * Number(input2.value);
}

function add(){
    answer.innerText = Number(input1.value) + Number(input2.value);
    if(input1.value <= 0 || input2.value <= 0){
        answer.innerText = "het antwoord is te laag";
    }
}

function minus(){
    answer.innerText = Number(input1.value) - Number(input2.value);
}

function divide(){
    answer.innerText = Number(input1.value) / Number(input2.value);
}
