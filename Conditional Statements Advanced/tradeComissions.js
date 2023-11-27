function tradeComissions(input) {
    let town=input[0];
    let sales=Number(input[1]);
    let com=0
    if (town==`Sofia`) {
        if (sales>=0 && sales<=500) {
            com=(sales*0.05).toFixed(2);
            console.log(com);
        } else if (sales>500 && sales <=1000) {
            com=(sales*0.07).toFixed(2);
            console.log(com);
        } else if (sales>1000 && sales <=10000) {
            com=(sales*0.08).toFixed(2);
            console.log(com);
        } else if (sales>10000) {
            com=(sales*0.12).toFixed(2);
            console.log(com);
        } else {
            console.log(`error`);
        }
    } else if (town==`Varna`) {
        if (sales>=0 && sales<=500) {
            com=(sales*0.045).toFixed(2);
            console.log(com);
        } else if (sales>500 && sales <=1000) {
            com=(sales*0.075).toFixed(2);
            console.log(com);
        } else if (sales>1000 && sales <=10000) {
            com=(sales*0.1).toFixed(2);
            console.log(com);
        } else if (sales>10000) {
            com=(sales*0.13).toFixed(2);
            console.log(com);
        } else {
            console.log(`error`);
        }
    } else if (town==`Plovdiv`) {
        if (sales>=0 && sales<=500) {
            com=(sales*0.055).toFixed(2);
            console.log(com);
        } else if (sales>500 && sales <=1000) {
            com=(sales*0.08).toFixed(2);
            console.log(com);
        } else if (sales>1000 && sales <=10000) {
            com=(sales*0.12).toFixed(2);
            console.log(com);
        } else if (sales>10000) {
            com=(sales*0.145).toFixed(2);
            console.log(com);
        } else {
            console.log(`error`);
        }
    } else {
        console.log(`error`);
    }
}

tradeComissions(["Kaspichan", "-50"])
