function trekkingMania(input) {
    let count=Number(input[0]);
    let musala=0;
    let monblan=0;
    let kil=0;
    let k2=0;
    let everest=0;
    let total=0;
    for (i=1;i< input.length;i++) {
        let p=Number(input[i]);
        total+=p;
        if (p<=5) {
            musala+=p;
        } else if (p<=12) {
            monblan+=p;
        } else if (p<=25) {
            kil+=p;
        } else if (p<=40) {
            k2+=p;
        } else {
            everest+=p;
        }
    }
    console.log(`${(musala/total*100).toFixed(2)}%`);
    console.log(`${(monblan/total*100).toFixed(2)}%`);
    console.log(`${(kil/total*100).toFixed(2)}%`);
    console.log(`${(k2/total*100).toFixed(2)}%`);
    console.log(`${(everest/total*100).toFixed(2)}%`);
}

trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])