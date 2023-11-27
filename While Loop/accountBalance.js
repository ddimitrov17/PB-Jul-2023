function accountBalance(input) {
    let deposit=input[0];
    let index=1;
    let sum=0;
    while (deposit!=="NoMoreMoney") {
        let amount=Number(deposit);
        if (amount<0) {
            console.log(`Invalid operation!`);
            break;
        }
        sum+=amount;
        console.log (`Increase: ${amount.toFixed(2)}`);
        deposit=input[index];
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}

accountBalance(["120", "45.55", "-150"])