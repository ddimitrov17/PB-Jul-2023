function maxNumber(input) {
    let n=input[0];
    let index=1;
    let max=Number.MIN_SAFE_INTEGER;
    while (n!=="Stop") {
        let current=Number(n);
        if (current>max) {
            max=current;
        }
        n=input[index];
        index++;
    }
    console.log(max)
}

maxNumber(["999", "Stop"])