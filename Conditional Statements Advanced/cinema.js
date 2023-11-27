function cinema(input) {
    let type=input[0];
    let r=Number(input[1]);
    let c=Number(input[2]);
    let sum=0
    if (type=="Premiere") {
        sum=(r*c*12).toFixed(2);
    } else if (type==`Normal`) {
        sum=(r*c*7.5).toFixed(2);
    } else {
        sum=(r*c*5).toFixed(2);
    }
    console.log(`${sum}`);
}

cinema(["Premiere",

"10",

"12"])