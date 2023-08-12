const imgarray=[ `<img src="images/image1.jpg" class="img-slide">`,
                 `<img src="images/image2.jpg" class="img-slide">`,
                 `<img src="images/image3.jpg" class="img-slide">`,
                 `<img src="images/image4.jpg" class="img-slide">`,
                 `<img src="images/image5.jpg" class="img-slide">`,
                 `<img src="images/image6.jpg" class="img-slide">`
]
// add images to slidecontainer 
let i=0;
slidecontainer.innerHTML+=imgarray[i]  //use += cause we would like to add image not change the content of the div slidecontainer
slidecontainer.innerHTML+=`<p>#${i+1} of ${imgarray.length}</p>`
pre.setAttribute("disabled","")

//click to next button 
next.addEventListener("click",(eo) => {
    pre.removeAttribute("disabled");
    i++
    slidecontainer.innerHTML+=` <p>#${i+1} of ${imgarray.length}</p>`
    slidecontainer.innerHTML+=imgarray[i];

     //remove active number=> add active-num to item
     parentnum.getElementsByClassName("active-num")[0].classList.remove("active-num")
     parentnum.getElementsByTagName("button")[i].classList.add("active-num")

    if(i+1==imgarray.length){
        next.setAttribute("disabled","")
    }
   
})
//click to previous button
pre.addEventListener("click",(eo) => {
    next.removeAttribute("disabled");
    i--

    //remove active number=> add active-num to item
    parentnum.getElementsByClassName("active-num")[0].classList.remove("active-num")
    parentnum.getElementsByTagName("button")[i].classList.add("active-num")

    slidecontainer.innerHTML+=imgarray[i]
    slidecontainer.innerHTML+=`<p>#${i+1} of ${imgarray.length}</p>`
    if(i==0){
        pre.setAttribute("disabled","")
    }
})

//active number
const buttonsnum=document.querySelectorAll(".b-num")
const parentnum=document.getElementsByClassName("button-num")[0]
buttonsnum.forEach((item,index) => {
    item.addEventListener("click",(eo) => {

        //link between the number and the image
        slidecontainer.innerHTML+=imgarray[index]
        slidecontainer.innerHTML+=`<p>#${index+1} of ${imgarray.length}</p>`

        parentnum.getElementsByClassName("active-num")[0].classList.remove("active-num")
        item.classList.add("active-num")

        i=index;

        if(index==0){
            pre.setAttribute("disabled","")
            next.removeAttribute("disabled")
        }else if(index==imgarray.length-1){
            next.setAttribute("disabled","")
            pre.removeAttribute("disabled")
        }else{
            pre.removeAttribute("disabled")
            next.removeAttribute("disabled")
        }

       
    })
});

