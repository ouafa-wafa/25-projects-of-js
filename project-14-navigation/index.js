const bar=document.getElementById("bar");
const menu=document.getElementById("menu")
const icon=document.querySelector(".fa-solid");

bar.addEventListener("click",(eo) => {
    //show and hide the menu
    menu.classList.toggle("active")
    //change between x and bar icon
    icon.classList.toggle("fa-x")
})