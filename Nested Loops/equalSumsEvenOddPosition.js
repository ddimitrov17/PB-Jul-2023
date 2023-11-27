function equalSumsEvenOddPosition(input) {
    let first=Number(input[0]);
    let last=Number(input[1]);
    let buff="";
    for (let i=first;i<=last;i++) {
        let numToString=String(i);
        let sumEven=0;
        let sumOdd=0;
        for (let j=0;j<numToString.length;j++) {
            if (j%2==0) {
                sumEven+=Number(numToString[j]);
            } else {
                sumOdd+=Number(numToString[j]);
            }
        }
        if (sumOdd===sumEven) {
            buff+=`${i} `;
        }
    }
    console.log(buff);
}

equalSumsEvenOddPosition(["100000",

"100050"])