const buttons=document.querySelectorAll(".plus");
buttons.forEach(item => {
    item.addEventListener("click",(eo) => {
        //bring the class content of our para
       const content=eo.target.parentElement.parentElement.querySelector(".content");
       //change the opacity and the hight =>we would like to show the content
       content.classList.toggle("active")
       //toggle between the + and -
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


