function sumOfNumbers(input) {
    let text=String(input[0]);
    let sum=0;
    for (i=0;i<text.length;i++) {
        let ch=Number(text[i]);
        sum=sum+ch;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"])