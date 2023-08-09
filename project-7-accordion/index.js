const buttons=document.querySelectorAll(".plus");
buttons.forEach(item => {
    item.addEventListener("click",(eo) => {
       const content=eo.target.parentElement.parentElement.querySelector(".content");
       content.classList.toggle("active")
       item.classList.toggle("hide-plus")
       if(item.classList.contains('hide-plus')){
        //contains verify if the class hide plus exist or not     ^-^
        item.innerText='_';
        item.style.transform="translateY(-12px)";
       }else{
        item.innerText='+';
        item.style.transform="translateY(0px)";
       }
      
    })
});
