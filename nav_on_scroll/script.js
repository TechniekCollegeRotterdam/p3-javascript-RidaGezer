const nav = document.getElementById("nav")
let lastscrollY = window.scrollY

window.addEventListener('scroll', () => { 
    console.log(window.scrollY)
    if(lastscrollY <= window.scrollY){
        nav.classList.add('hide')
    } else {
        nav.classList.remove('hide')
    }
    lastscrollY = window.scrollY;
});

