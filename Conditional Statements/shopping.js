function shopping(input) {
    let budget=Number(input[0]);
    let GPU=Number(input[1]);
    let CPU=Number(input[2]);
    let RAM=Number(input[3]);
    let gpuprice=GPU*250;
    //console.log(gpuprice);
    let bill=gpuprice+(CPU*0.35*gpuprice)+(RAM*0.1*gpuprice);
    //console.log(bill);
    if (GPU>CPU) {
        bill*=0.85;
    }
    if (bill<=budget) {
    console.log(`You have ${(budget-bill).toFixed(2)} leva left!`);
    } else {
    console.log(`Not enough money! You need ${(bill-budget).toFixed(2)} leva more!`);    
    }
}

shopping(["920.45",

"3",

"1",

"1"]);