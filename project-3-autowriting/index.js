//fonction autowriting
let i=1;
const autowriting = () => {
    const title="Hi my name is wafa and i'm a front end dev";
    auto.innerText=title.slice(0,i);
    i++
    if(title.length<i){
        i=1
    }
}

setInterval(autowriting, 200);
