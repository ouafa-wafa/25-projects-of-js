const btn=document.getElementById("btn");

btn.addEventListener("click",(eo) => {
   eo.preventDefault();
   const gender=document.getElementById("gender").value;
   const age=parseInt(document.getElementById("age").value);
   const height1=parseInt(document.getElementById("height1").value);
   const height2=parseInt(document.getElementById("height2").value);
   const weight =parseFloat(document.getElementById("weight").value);
  
   if(gender && age && height1 && height2 && weight){
     //convert the height into meters
    const heightmeters=(height1*12+height2)*0.0254;
    const bmi=weight/(heightmeters^2);
    const result=document.getElementById("result");
    let category='';
    if(bmi<18.5){
        category='under weight'
    }else if(bmi>=18.5 && bmi<24.9){
        category='normal weight'
    }else if(bmi>=25 && bmi<29.9){
        category='over weight'
    }else{
        category='obese'
    }
    result.innerHTML=`Your BMI is : ${bmi} <br> Category : ${category}`
   }else{
    alert("you should complet all fields")
   }
})