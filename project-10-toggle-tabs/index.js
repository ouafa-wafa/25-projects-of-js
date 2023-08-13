const tabs=document.querySelectorAll(".btn")
const content=document.querySelectorAll(".content > div")

tabs.forEach(item => {
    item.addEventListener("click",(eo) => {
        //loop for remove all the class with name active
        tabs.forEach(item => {
            item.classList.remove("active")
        });
        //add a class active for the tabs we clicked
        // we can write eo.currentTarget it's the same of target
        eo.target.classList.add("active")

        //remove the content for all the divs
        content.forEach(item => {
            item.style.display="none"
        });
        //console.log(eo.target.dataset.cont) bring the class of the tabs we clicked
        document.querySelector(eo.target.dataset.cont).style.display='block'
    })
});