function specialNumbers(input) {
    let n=Number(input[0]);
    let buff="";
    for (let i=1111;i<=9999;i++) {
        let numToString=String(i);
        let count=0;
        for (let q=0;q<numToString.length;q++) {
            if (n%numToString[q]==0) {
                count++;
            }
        }
        if (count===4) {
            buff+=`${i} `;
        }
    }
    console.log(buff);
}

specialNumbers(["3"])