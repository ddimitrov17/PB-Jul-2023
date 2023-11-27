function deerOfSanta(input) {
    let daysAbsent=Number(input[0]);
    let food=Number(input[1]);
    let firstNeeded=Number(input[2]);
    let secondNeeded=Number(input[3]);
    let thirdNeeded=Number(input[4]);
    let neededTotal=daysAbsent*(firstNeeded+secondNeeded+thirdNeeded);
    if (food>=neededTotal) {
        console.log(`${Math.floor(food-neededTotal)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(neededTotal-food)} more kilos of food are needed.`);
    }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
