const btn=document.getElementById("btn");

btn.addEventListener("click",(eo) => {

    const datebirth=document.getElementById("datebirth").value;
    if(datebirth){
        //display the content previous
        const content=document.getElementById("content");
        content.style.display="none";
         
        //user bithrady
        const userbirth=new Date(datebirth);
        let d1=userbirth.getDay();
        let m1=userbirth.getMonth();
        let y1=userbirth.getFullYear();
        console.log(`${d1},${m1},${y1}`)

        //today date
        const today=new Date();
        let d2=today.getDay()+1;
        let m2=today.getMonth()+1;//we add one cz the get month start with zero
        let y2=today.getFullYear();
        console.log(`${d2},${m2},${y2}`)

        //the diferenc between the dates
        let d3,m3,y3;
        y3=y2-y1;
        if (m2>=m1) {
            m3=m2-m1;
        }else{
            y3--;
            m3=12+m2-m1;
        }
        if(d2>=d1){
            d3=d2-d1;
        }else{
            m3--;
            d3=getdatemonth(y1,m1)+d2-d1;
        }
        if(m3<0){
            m3=11;
            y3--;
        }


        const result=document.getElementById("result");
        result.innerHTML=`Your age is : ${y3}years , ${m3} months and ${d3}days`

    }else{
        alert("you should enter a date")
    }
    
})
function getdatemonth(year,month) {
    return new Date(year,month,0).getDate();
}