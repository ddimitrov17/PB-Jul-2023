function repaint(input) {
    let n=Number(input[0])*1.5+2*1.5;
    let b=Number(input[1])*14.5+(input[1]*0.1)*14.5;
    let rb=Number(input[2])*5;
    let h=Number(input[3]);
    let t=0.4;
    let hw=h*((n+b+rb+t)*0.3);
    let sum=n+b+rb+t+hw;
    console.log(sum);
}

repaint(["10","11","4","8"]);