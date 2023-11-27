function snookerTickets(input) {
    let round=input[0];
    let ticketType=input[1];
    let ticketCount=Number(input[2]);
    let pic=input[3];
    let sum=0;
    let freePic=false;
    if (round==="Quarter final") {
        switch (ticketType) {
            case "Standard": sum=ticketCount*55.5; break;
            case "Premium": sum=ticketCount*105.2; break;
            case "VIP": sum=ticketCount*118.9; break;
        }
    } else if (round==="Semi final") {
        switch (ticketType) {
            case "Standard": sum=ticketCount*75.88; break;
            case "Premium": sum=ticketCount*125.22; break;
            case "VIP": sum=ticketCount*300.40; break;
        }
    } else {
        switch (ticketType) {
            case "Standard": sum=ticketCount*110.10; break;
            case "Premium": sum=ticketCount*160.66; break;
            case "VIP": sum=ticketCount*400; break;
        }
    }
    if (sum>4000) { //discount 25
        sum*=0.75;
        freePic=true;
    } else if (sum>2500 && sum<=4000) {
        sum*=0.9;
    }
    if (pic==="Y" && !freePic) { // trophy pic
        sum=sum+ticketCount*40;
    }
    console.log(sum.toFixed(2));
}

snookerTickets(["Quarter final",

"Standard",

"11",

"N"])