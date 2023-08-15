const min=document.getElementById("min")
const sec=document.getElementById("sec")
const tens=document.getElementById("tens")
const start=document.getElementById("start")
const reset=document.getElementById("reset")
const stop=document.getElementById("stop")
let interval;
let m=0;
let s=0;
let t=0;

const timer = () => {
    t++
    if(t<=9){
        tens.innerHTML='0'+t
    }
    if(t>9){
        tens.innerHTML=t
    }
    if(t>99){
        s++
        sec.innerHTML='0'+s
        t=0;
        tens.innerHTML='0'+0
    }
    if(s>9){
        sec.innerHTML=s;
    }
    if(s>59){
        m++
        min.innerHTML='0'+m
        s=0;
        sec.innerHTML='0'+0
    }
    
}
start.onclick=() => {
    clearInterval(interval)
    interval=setInterval(timer,10);
}
stop.onclick=() => {
    clearInterval(interval);
}
reset.onclick=() => {
    clearInterval(interval);
    s="00"
    m="00"
    t="00"
    tens.innerHTML=t;
    sec.innerHTML=s;
    min.innerHTML=m;
}
