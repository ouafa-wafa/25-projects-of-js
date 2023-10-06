const result=document.getElementById("result");
btn.addEventListener("click",(eo) => {
    const word=document.getElementById("word").value;
        
    if(btn){
        const unicode=word.charCodeAt(0);
        result.innerHTML=`your unicode is ${unicode}`
    }else{
    result.innerHTML=`you should write a character`
    }
})

