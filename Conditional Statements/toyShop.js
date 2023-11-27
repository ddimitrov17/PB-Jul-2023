function toyShop(input) {
    let trip=Number(input[0]);
    let puzzle=Number(input[1]);
    let doll=Number(input[2]);
    let bear=Number(input[3]);
    let minion=Number(input[4]);
    let trucks=Number(input[5]);
    let total=puzzle+doll+bear+minion+trucks;
    let bill=puzzle*2.6+doll*3+bear*4.1+minion*8.2+trucks*2;
    if (total>=50) {
        bill=bill-0.25*bill;
    }
    let rent=bill*0.1;
    let profit=bill-rent;
    if(profit>=trip) {
        console.log(`Yes! ${(profit-trip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip-profit).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);