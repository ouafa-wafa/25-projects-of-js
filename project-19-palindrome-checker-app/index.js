const btn=document.getElementById("btn");
btn.addEventListener("click",(eo) => {
    const word=document.getElementById("word").value;
    if(isNaN(word)){
    const cleanstring=word.toLowerCase().replace(/[^a-z0-9]/g,"");
    //console.log(cleanstring)
    const reversestring=cleanstring.split('').reverse().join("");
    //console.log(reversestring)
    const result=document.getElementById("result");
    if(cleanstring==reversestring){
         result.innerHTML=`it's palindrome`
    }else{
       result.innerHTML=`it's not a palindrom`
    }
    }else{
        alert("you should write somthing")
    }
})