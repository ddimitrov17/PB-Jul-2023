function santasHoliday(input) {
    let days=Number(input[0]);
    let type=input[1];
    let g=input[2];
    let sum=0;
    if (type==`room for one person`) {
        sum=18*(days-1);
        if (g==`positive`) {
            sum*=1.25;
            //console.log(sum)
        } else {
            sum*=0.9;
        }
    } else if (type==`apartment`) {
        sum=25*(days-1);
        //console.log(sum)
        if (days<10) {
            sum*=0.7;
        } else if (days>10 && days<15) {
            sum*=0.65;
            //console.log(sum)
        } else {
            sum*=0.5;
        }
        if (g==`positive`) {
            sum*=1.25;
            //console.log(sum)
        } else {
            sum*=0.9;
        }
    } else {
        sum=35*(days-1);
        if (days<10) {
            sum*=0.9;
        } else if (days>10 && days<15) {
            sum*=0.85;
        } else {
            sum*=0.8;
        }
        if (g==`positive`) {
            sum*=1.25;
        } else {
            sum*=0.9;
        }
    }
    console.log(sum.toFixed(2));
}

santasHoliday(["30",
"president apartment",
"negative"])

