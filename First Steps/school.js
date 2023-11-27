function school(input) {
    let p=Number(input[0])*5.8;
    let m=Number(input[1])*7.2;
    let l=Number(input[2])*1.2;
    let d=Number(input[3])/100;
    let sum=(p+m+l)-((p+m+l)*d);
    console.log(sum);
}

school(["4", "2", "5", "13"]);