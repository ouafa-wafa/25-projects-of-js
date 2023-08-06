const button=document.getElementById("button");


button.addEventListener("click",(eo) => {

    const arrayquotes=[`<blockquote id="blockquote"> All that glitters is not gold<span>William Shakespeare</span></blockquote>`,
    `<blockquote id="blockquote">Three can keep a secret, if two of them are dead.<span>Benjamin Franklin</span></blockquote>`,
      `<blockquote id="blockquote"> I love the smell of napalm in the morning<span>Lt. Kilgore (character)</span></blockquote>`,
      `<blockquote id="blockquote">I think therefore I am.<span>Rene Descartes</span></blockquote>`,
      `<blockquote id="blockquote">If you build it, they will come.<span>Joe Jackson (character)</span></blockquote>`,
       `<blockquote id="blockquote">What doesn't kill us makes us stronger.<span>Friedrich Nietzsche</span></blockquote>`]
     parentquotes.innerHTML=arrayquotes[Math.floor(Math.random()*arrayquotes.length)];
})
