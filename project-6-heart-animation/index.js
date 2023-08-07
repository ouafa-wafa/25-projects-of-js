const button=document.getElementById("button")
button.addEventListener("click",(eo) => {
    const parentheart=document.createElement("div");
    continerheart.append(parentheart);

   const set= setInterval(() => {
        const heart=document.createElement('div');
        heart.classList.add("heart");
        heart.innerHTML="&#128153";
        heart.style.left=`${Math.random() *100}%`;
        heart.style.animationDuration=`${Math.round(Math.random()*3)}s`
        parentheart.append(heart)
    }, 50);
    setTimeout(() => {
        clearInterval(set);
    }, 3000);
    setTimeout(() => {
        parentheart.remove();
    }, 5000);
})