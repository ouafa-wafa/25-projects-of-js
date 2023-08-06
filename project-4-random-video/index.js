//autowriting for the h1 the title of the page
i=1;
const autowriting = () => {
    const auto='random video';
    title.innerHTML=auto.slice(0,i);
    i++
    if(auto.length<i){
        i=1;
    }
}
setInterval(autowriting, 500);

//function for random video
const button=document.getElementById("button");

button.addEventListener("click",(eo) => {

    const arrayvideo=[`<iframe id="iframe"  width="560" height="315" src="https://www.youtube.com/embed/HMwsAd_mOts" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/hX5rxp0QlPU"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/Fjty17NF0u4" 
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
     parentiframe.innerHTML=arrayvideo[Math.round(Math.floor()*arrayvideo.length)];
     /* let i=0 above the event 
     inside the event we write : parentiframe.innerHTML=arrayvideo[i]
     i++
     if(i>arrayvideo.lenght-1){
        i=0;
     } */
})