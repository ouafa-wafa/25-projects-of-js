const btn=document.getElementById("btn");

btn.addEventListener("click",(eo) => {
    const name1=document.getElementById("name1").value.trim();
    //console.log(name1)
    const name2=document.getElementById("name2").value.trim();
    //console.log(name2)

    //show a pop up when the user put an empty names the first if statment
    if(name1==="" || name2===""){
        alert("please enter both names")
    }else{
        const loveper=Math.floor(Math.random()*101);//why 101 because we would like to show there is 100% match
        const result=document.getElementById("result");
        result.innerHTML=`${name1} and ${name2}'s love percentage ${loveper}%`

        if(loveper<40){
            result.innerHTML+=" ammmm not a great match"
        }else{
            result.innerHTML+=" give it a try"
        }
    }
    

})
