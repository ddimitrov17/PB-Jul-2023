function workout(input) {
    let days=Number(input[0]);
    let kmFirstDay=Number(input[1]);
    //let percentUp=Number(input[2]);
    let total=kmFirstDay;
    let sum=kmFirstDay;
    for (let i=2;i< input.length;i++) {
        let percentUp=input[i]/100;
        //console.log(percentUp);
        total=total*(1+percentUp);
        sum+=total
    }
    // total=Math.ceil(total);
    //console.log(sum);
    if (sum>=1000) {
        console.log(`You've done a great job running ${Math.ceil(sum-1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000-sum)} more kilometers`);
    }
}

workout(["4",
"100",
"30",
"50",
"60",
"80"])

