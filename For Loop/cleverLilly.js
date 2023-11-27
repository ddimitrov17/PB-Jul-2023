function cleverLilly(input) {
    let age=Number(input[0]);
    let washerPrice=Number(input[1]);
    let pricePerToy=Number(input[2]);
    let stolen=0;
    let bdcounter=0;
    let money=0;
    let toycounter=0;
    let totalMoney=0;
    for (i=1;i<=age;i++) {
        if (i%2==0) {
            bdcounter++;
            money=money+bdcounter*10;
            stolen+=1;
        } else {
            toycounter++;
        }
    }
    totalMoney=money+toycounter*pricePerToy-stolen;
    if (totalMoney>=washerPrice) {
        console.log(`Yes! ${(totalMoney-washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice-totalMoney).toFixed(2)}`);
    }
}

cleverLilly(["10",

"170.00",

"6"])