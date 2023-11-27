function journey (input) {
    let budget=Number(input[0]);
    let season=input[1];
    let d=" ";
    let sum=0;
    let p=" ";
    if (budget<=100) {
        console.log(`Somewhere in Bulgaria`);
        if (season=="summer") {
            sum=budget*0.3;
            p="Camp";
        } else {
            sum=budget*0.7;
            p="Hotel";
        }
    } else if (budget<=1000) {
        console.log(`Somewhere in Balkans`);
        if (season=="summer") {
            sum=budget*0.4;
            p="Camp";
        } else {
            sum=budget*0.8;
            p="Hotel";
        }
    } else {
        console.log(`Somewhere in Europe`);
        p="Hotel";
        sum=budget*0.9;
    }
    console.log(`${p} - ${sum.toFixed(2)}`)
}

journey(["1500", "summer"])