const button=document.querySelector("button");
const input=document.querySelector("input")
const container=document.getElementById("container");

// add new task

button.addEventListener("click",(eo) => {
    eo.preventDefault();
    const task=`<div class="task">
    <span class="icon-star-full icon"></span>
    <p> ${input.value} </p>
    <div>
        <span class="icon-bin icon"></span>
        <span class="icon-sad2 icon"></span>
    </div>
</div>`
container.innerHTML +=task;
})

// remove a task 

container.addEventListener("click", (eo) => {
   if (eo.target.className =="icon-bin icon") {
     eo.target.parentElement.parentElement.remove();
   } else if(eo.target.className=="icon-sad2 icon"){
     eo.target.classList.remove("icon-sad2")
     eo.target.classList.add("icon-heart")
     eo.target.parentElement.p.classList.add("line")
   }else{

   }
})