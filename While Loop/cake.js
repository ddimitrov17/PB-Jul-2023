function cake(input) {
    let width=Number(input[0]);
    let length=Number(input[1]);
    let cakeSize=width*length;
    let index=2;
    let command=input[index];
    let sum=0;
    while (command!=="STOP") {
        command=Number(input[index]);
        sum+=command;
        if (cakeSize<sum) {
            console.log(`No more cake left! You need ${sum-cakeSize} pieces more.`);
            break;
        }
        index++;
        command=input[index];
    }
    if (cakeSize>=sum) {
        console.log(`${cakeSize-sum} pieces are left.`);
    }

}

cake(["10",

"2",

"2",

"4",

"6",

"STOP"])