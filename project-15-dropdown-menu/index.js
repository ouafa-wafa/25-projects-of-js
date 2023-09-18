let ourservices =document.getElementById("ourservices");
let ourteam=document.getElementById("ourteam");
let ourproject=document.getElementById("ourproject");
let submenu=document.getElementsByClassName("dropmenu");
Array.from(submenu)

    
    ourservices.addEventListener("click",(eo) => {
        eo.preventDefault()
        submenu[0].classList.toggle("active")
    })
    ourteam.addEventListener("click",(eo) => {
        eo.preventDefault()
        submenu[1].classList.toggle("active")
    })
    ourproject.addEventListener("click",(eo) => {
        eo.preventDefault()
        submenu[2].classList.toggle("active")
    })


