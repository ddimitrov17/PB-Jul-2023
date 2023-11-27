function deposit(input) {
    let sum=Number(input[0]);
    let m=Number(input[1]);
    let pr=Number(input[2])/100;
    let e=sum+m*((sum*pr)/12);
    console.log(e);
}

deposit(["200", "3", "5.7"]);