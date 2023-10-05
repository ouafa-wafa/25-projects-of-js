const btn=document.getElementById("btn");

btn.addEventListener("click",(eo) => {
    const loanamount=parseFloat(document.getElementById("loanamount").value);
    const rate=parseFloat(document.getElementById("rate").value);
    const Loantrem=parseFloat(document.getElementById("Loantrem").value);

   if(isNaN(loanamount) || isNaN(rate) || isNaN(loanamount)){
    alert("you should complet all your information")
   }else{
   const monthlyintrest=(rate/100)/12;
   const totalpayment=Loantrem;
   const monthlypyment=(loanamount*monthlyintrest)/(1-Math.pow(1+monthlyintrest,-totalpayment))
   const totalintrset=(monthlypyment*totalpayment)-loanamount
   result=document.getElementById("result");
   result.style.display="block";
   result.innerHTML=`monthly payment : ${monthlypyment} <br> total intrset : ${totalintrset}`
   }
})
