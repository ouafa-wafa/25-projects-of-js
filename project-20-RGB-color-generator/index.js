const redslider=document.getElementById("redslider");
const greenslider=document.getElementById("greenslider");
const blueslider=document.getElementById("blueslider");
const rednumber=document.getElementById("rednumber");
const greenumber=document.getElementById("greennumber");
const bluenumber=document.getElementById("bluenumber");
const boxcolor=document.getElementById("boxcolor");
const copy=document.getElementById("copy-button");
const value=document.getElementById("value");

redslider.addEventListener("input",updatecolor);
greenumber.addEventListener("input",updatecolor);
blueslider.addEventListener("input",updatecolor);
copy.addEventListener("click",copyrgbcolor);


function updatecolor(){
    redvalue=redslider.value;
    greenvalue=greenslider.value;
    bluevalue=blueslider.value;

    rednumber.innerHTML=`${redvalue}`;
    greenumber.innerHTML=`${greenvalue}`
    bluenumber.innerHTML=`${bluevalue}`;
    

    value.innerHTML=`rgb(${redvalue},${greenvalue},${bluevalue})`
    boxcolor.style.backgroundColor=`rgb(${redvalue},${greenvalue},${bluevalue})`

};

function copyrgbcolor(){
    rednumber.innerHTML=`${redvalue}`;
    greenumber.innerHTML=`${greenvalue}`
    bluenumber.innerHTML=`${bluevalue}`;
    

    const rgbColor=`rgb(${redvalue},${greenvalue},${bluevalue})`;
    navigator.clipboard.writeText(rgbColor)
    .then(() => {
        alert("rgb color value copied :"+rgbColor)
    })
    .catch((error)=>{
        console.error("field to copy rgb color",error)
    })

};

