function basketball(input) {
    let t=Number(input[0]);
    let s=t-t*0.4;
    let e=s-s*0.2;
    let b=e/4;
    let a=b/5;
    let sum=t+s+e+b+a;
    console.log(sum);
}

basketball(["365"]);