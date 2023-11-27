function vacation(input) {
    let neededMoney=Number(input[0]);
    let availableMoney=Number(input[1]);
    let index=2;
    let spendCounter=0;
    let action=input[index];
    let day=0;
    while (true) {
        day++;
        if (action==="spend") {
            index++;
            availableMoney-=Number(input[index]);
            if (availableMoney<0) {
                availableMoney=0;
            }
            spendCounter++;
            if (spendCounter===5) {
                console.log(`You can't save the money.`);
                console.log(`${day}`);
                break;
            }
        }
        if (action==="save") {
            index++;
            availableMoney+=Number(input[index]);
            spendCounter=0;
            if (availableMoney>=neededMoney) {
                console.log(`You saved the money for ${day} days.`);
                break;
            }
        }
        index++;
        action=input[index];
    }
}

vacation(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10","spend", "10"])