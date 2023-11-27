function fruitShop(input) {
    let fruit=input[0];
    let day=input[1];
    let qty=Number(input[2]);
    let price=0;
    if (fruit==`banana`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*2.5).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*2.7).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (fruit==`apple`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*1.2).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*1.25).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (fruit==`orange`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*0.85).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*0.9).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (fruit==`grapefruit`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*1.45).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*1.6).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (fruit==`kiwi`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*2.7).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*3).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (fruit==`pineapple`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*5.5).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*5.6).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (fruit==`grapes`) {
        if (day==`Monday` || day=="Tuesday" || day==`Wednesday` || day==`Thursday` || day==`Friday`) {
            price=(qty*3.85).toFixed(2);
            console.log(price);
        } else if(day=="Saturday" || day=="Sunday") {
            price=(qty*4.2).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else {
        console.log(`error`);
    }
}

fruitShop(["apple",

"Tuesday",

"2"]);