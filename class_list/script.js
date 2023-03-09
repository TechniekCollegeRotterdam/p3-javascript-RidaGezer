let button = document.getElementById("btn")
let block = document.getElementById("block")

block.addEventListener("mouseover",function(){
    console.log("ik heb geklikt");
    block.classList.add("highlight")
})

block.addEventListener("mouseout",function(){
    block.classList.remove("highlight")
})

