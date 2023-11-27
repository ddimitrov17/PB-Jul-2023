function restaurant(input) {
    let c=Number(input[0])*10.35;
    let f=Number(input[1])*12.4;
    let v=Number(input[2])*8.15;
    let d=(c+f+v)*0.2;
    let sum=c+f+v+d+2.5;
    console.log(sum);
}

restaurant(["2","4","3"]);