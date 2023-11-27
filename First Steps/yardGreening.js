function yardGreening(input) {
    let area=Number(input[0]);
    let sum=area*7.61;
    let discount=0.18*sum;
    let price=sum-discount;
    console.log(`The final price is: ${price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["150"]);