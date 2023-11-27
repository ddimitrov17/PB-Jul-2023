function sumOfTwoNumbers(input) {
    let first=Number(input[0]);
    let last=Number(input[1]);
    let magic=Number(input[2]);
    let counter=0;
    let isFound=false;
    for (let i=first;i<=last;i++) {
        if (isFound) break;
        for (let c=first;c<=last;c++) {
            counter++;
            let result=c+i;
            if (result===magic) {
                console.log(`Combination N:${counter} (${i} + ${c} = ${result})`);
                isFound=true;
                break; 
            }
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magic}`);
    }
}

sumOfTwoNumbers(["23",

"24",

"20"])