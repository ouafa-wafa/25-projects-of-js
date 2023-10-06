const btn = document.getElementById("btn");
btn.addEventListener("click", (eo) => {
    const billamount = parseFloat(document.getElementById("billamount").value);
    const servicerating = parseFloat(document.getElementById("servicerating").value);
    const numberpeople = parseInt(document.getElementById("numberpeople").value);
    const mealtype = document.getElementById("mealtype").value;
    if (isNaN(billamount) || isNaN(servicerating) || isNaN(numberpeople) || isNaN(mealtype)) {
        let tip;
        switch (servicerating) {
            case 1:
                tip = billamount * 0.05;
                break;
            case 2:
                tip = billamount * 0.10;
                break;
            case 3:
                tip = billamount * 0.15;
                break;
            case 4:
                tip = billamount * 0.20;
                break;
        }
        let totalamount = billamount + tip;
        let amountperperson = totalamount / numberpeople;
        if (mealtype === 'dinner') {
            tip += 5;
            totalamount += 5;
            amountperperson += 5;
        }
        const result = document.getElementById("result");
        result.style.display="block"
        result.innerHTML = `the tip is :${tip}<br> the total amout is : ${totalamount} <br> the amount per person is : ${amountperperson}`
    }else{
        alert("ou should complet all the boxes")
    }

})