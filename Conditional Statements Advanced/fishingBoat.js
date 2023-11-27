function fishingBoat(input) {
    let budget=Number(input[0]);
    let season=input[1];
    let count=input[2];
    let bill=0;
    switch (season) {
        case "Spring": {
        bill=3000;
        if (count<=6) bill*=0.9;
        if (count>6 && count <=11) bill*=0.85;
        if (count>11) bill*=0.75; 
        }; break;
        case "Summer": {
            bill=4200;
            if (count<=6) bill*=0.9;
            if (count>6 && count <=11) bill*=0.85;
            if (count>11) bill*=0.75; 
        }; break;
        case "Autumn": {
                bill=4200;
                if (count<=6) bill*=0.9;
                if (count>6 && count <=11) bill*=0.85;
                if (count>11) bill*=0.75;
        }; break;
        case "Winter": {
        bill=2600;
        if (count<=6) bill*=0.9;
        if (count>6 && count <=11) bill*=0.85;
        if (count>11) bill*=0.75;
        }; break;   
    }
    if (season !== "Autumn") { 
    if (count%2==0) bill*=0.95;
    }
    if (budget>=bill) {
        console.log(`Yes! You have ${(budget-bill).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(bill-budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3600",

"Autumn",

"6"])