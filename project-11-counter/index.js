const rest=document.getElementById("rest");
const decrease=document.getElementById("decrease");
const increase=document.getElementById("increase");
const number=document.getElementById("number")

let count=0

increase.addEventListener("click",(eo) => {
    count++
    number.textContent=count
})
decrease.addEventListener("click",(eo) => {
    count--
    number.textContent=count
})
rest.addEventListener("click",(eo) => {
    count=0
    number.textContent=count
})
