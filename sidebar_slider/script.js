

document.body.addEventListener("mousemove",function(e){
    if(e.clientX  <= 20)
    {document.getElementById("navbar").classList.add("show-nav")}

    if
    (e.clientX  >= 300)
    {document.getElementById("navbar").classList.remove("show-nav")}
})
