const btn=document.getElementById("btn");
btn.addEventListener("click",(eo) => {
    const text=document.getElementById("text").value.toLowerCase();
    let count=0;
    for(let i=0;i<text.length;i++){
        let char=text.charAt(i);
        if(char =='e' || char=='a' || char=='u' || char=='i' ||char=='o' ){
            count++;
        }

    }
    const result=document.getElementById("result");
    result.innerHTML=`there is ${count} vowels`
})