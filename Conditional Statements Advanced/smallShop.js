function smallShop(input) {
    let product=input[0];
    let town=input[1];
    let qty=Number(input[2]);
    let price=0;
    if (town==="Sofia") {
        if (product==="coffee") {
            price=qty*0.5;
            console.log(price);
        } else if (product==="water") {
            price=qty*0.8;
            console.log(price);
        } else if (product==="beer") {
            price=qty*1.2;
            console.log(price);
        } else if (product==="sweets") {
            price=qty*1.45;
            console.log(price);
        } else if (product==="peanuts") {
            price=qty*1.6;
            console.log(price);
        }
    } else if (town==="Plovdiv") {
        if (product==="coffee") {
            price=qty*0.4;
            console.log(price);
        } else if (product==="water") {
            price=qty*0.7;
            console.log(price);
        } else if (product==="beer") {
            price=qty*1.15;
            console.log(price);
        } else if (product==="sweets") {
            price=qty*1.3;
            console.log(price);
        } else if (product==="peanuts") {
            price=qty*1.5;
            console.log(price);
        }
    } else {
        if (product==="coffee") {
            price=qty*0.45;
            console.log(price);
        } else if (product==="water") {
            price=qty*0.7;
            console.log(price);
        } else if (product==="beer") {
            price=qty*1.1;
            console.log(price);
        } else if (product==="sweets") {
            price=qty*1.35;
            console.log(price);
        } else if (product==="peanuts") {
            price=qty*1.55;
            console.log(price);
        }
    }
}

smallShop(["water", "Plovdiv", "2"])