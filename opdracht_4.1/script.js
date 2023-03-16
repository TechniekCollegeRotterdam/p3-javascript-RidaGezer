let answer = document.getElementById("answer")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")



function multiply(){
    
    if(input1.value > 0 && input2.value >  0) {
        answer.innerText = Number(input1.value) * Number(input2.value);
    }
        
else {
    answer.innerText = "het antwoord is te laag";
}
}

function add(){
    
    if(input1.value > 0 && input2.value >  0) {
        answer.innerText = Number(input1.value) + Number(input2.value);
    }
        
else {
    answer.innerText = "het antwoord is te laag";
}
}

function minus(){
    if(input1.value > 0 && input2.value >  0) {
        answer.innerText = Number(input1.value) - Number(input2.value);
    }
        
else {
    answer.innerText = "het antwoord is te laag";
}
}

function divide(){
    if(input1.value > 0 && input2.value >  0) {
        answer.innerText = Number(input1.value) / Number(input2.value);
    }
        
else {
    answer.innerText = "het antwoord is te laag";
}
}
