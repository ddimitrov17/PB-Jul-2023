function newHouse(input) {
    let type=(input[0]);
    let count=Number(input[1]);
    let budget=Number(input[2]);
    let bill=0;
    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    if (type=="Roses") {
        bill=count*5;
        if (count>80) bill*=0.9;
    }
    if (type=="Dahlias") {
        bill=count*3.8;
        if (count>90) bill*=0.85;
    }
    if (type=="Tulips") {
        bill=count*2.8;
        if (count>80) bill*=0.85;
    }
    if (type=="Narcissus") {
        bill=count*3;
        if (count<120) bill*=1.15;
    }
    if (type=="Gladiolus") {
        bill=count*2.5;
        if (count<80) bill*=1.2;
    }
    if (budget>=bill) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget-bill).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(bill-budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Tulips",

"88",

"260"])