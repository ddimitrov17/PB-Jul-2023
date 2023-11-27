function christmasPreparation(input) {
    let paper=Number(input[0]);
    let cotton=Number(input[1]);
    let glue=Number(input[2]);
    let discount=Number(input[3]);
    let sum=(5.8*paper+7.2*cotton+1.2*glue)*(1-discount/100);
    console.log(sum.toFixed(3));
}

christmasPreparation(["4",
"2",
"5",
"13"])

