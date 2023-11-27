function moving(input) {
    let width=Number(input[0]);
    let length=Number(input[1]);
    let height=Number(input[2]);
    let index=3;
    let command=input[index];
    let freeSize=width*length*height;
    let sum=0;
    while (command!=="Done") {
        command=Number(input[index]);
        sum+=command;
        if(freeSize<sum) {
            console.log(`No more free space! You need ${sum-freeSize} Cubic meters more.`);
            break;
        }
        index++;
        command=input[index];
    }
    if (freeSize>=sum) {
        console.log(`${freeSize-sum} Cubic meters left.`);
    }
}

moving(["10",

"1",

"2",

"4",

"6",

"Done"])