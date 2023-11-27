function godzillaVsKong(input) {
    let budget=Number(input[0]);
    let statist=Number(input[1]);
    let pricePerStatist=Number(input[2]);
    let decor=budget*0.1;
    let dress=statist*pricePerStatist;
    if (statist>150) {
        dress*=0.9;
    }
    let all=decor+dress;
    if (all>budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(all-budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-all).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["15437.62",

"186",

"57.99"]);