const days=document.getElementById("days")
const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")

const currentyear=new Date().getFullYear();
const newyear=new Date(`Janurary 1 ${currentyear +1} 00:00:00`);
// update countdown timer
function countdowntimer() {
    const currenttime=new Date();
    const diff=newyear-currenttime;
    let d=Math.floor(diff / 1000/60/60/24);
    let h=Math.floor(diff/1000/60/60)%24;
    let m=Math.floor(diff/1000/60)%60;
    let s=Math.floor(diff/1000)%60;
    if(h<10){
        h=`0${h}`
     }
    if(m<10){
        m=`0${m}`
    }
    if(s<10){
        s=`0${s}`
     }
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;

   
}
setInterval(countdowntimer, 1000);

