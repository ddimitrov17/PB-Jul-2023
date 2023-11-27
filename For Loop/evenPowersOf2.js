function evenPowersOf2(input) {
    let n=Number(input[0]);
    let q=0;
    for (i=0;i<=n;i+=2) {
        q=Math.pow(2,i);
        console.log(q);
    }
}

evenPowersOf2([`7`])