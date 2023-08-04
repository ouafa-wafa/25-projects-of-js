// change background color using hsl random
//methode one
const button=document.querySelector("button");
/*button.addEventListener("click",(eo) => {
    const random=Math.round(Math.random()*360)
    body.style.backgroundColor=`hsl(${random},44%,55%)`
})*/

// change background color of button using a random number in the array 
const arraybg=[' rgb(57, 102, 180)',' rgb(255, 127, 249)', 'rgb(0, 255, 0)','rgb(252, 0, 0)']

button.addEventListener("click",(eo) => {
   const random=Math.floor(Math.random()*arraybg.length)
   button.style.backgroundColor=arraybg[random]
})

//methode two of change bg
button.addEventListener("click",(eo) => {
    const random=`#${Math.random().toString(16).slice(2,8)}`
    body.style.backgroundColor=random
})
//when we change the bg of button and the body for the same color we use forEach loop or any method of loop