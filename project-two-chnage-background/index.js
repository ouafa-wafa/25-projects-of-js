const button=document.querySelector("button");
button.addEventListener("click",(eo) => {
    const random=Math.round(Math.random()*360)
    body.style.backgroundColor=`hsl(${random},44%,55%)`
})
