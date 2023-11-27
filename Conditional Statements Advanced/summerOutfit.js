function summerOutfit(input) {
    let d=Number(input[0]);
    let time=input[1];
    if (d>=10 && d<=18) {
        switch(time) {
            case "Morning": 
                console.log(`It's ${d} degrees, get your Sweatshirt and Sneakers.`); break;
            case "Afternoon": 
                console.log(`It's ${d} degrees, get your Shirt and Moccasins.`); break;
            case "Evening": 
                console.log(`It's ${d} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if (d>18 && d<=24) {
        switch(time) {
            case "Morning": 
                console.log(`It's ${d} degrees, get your Shirt and Moccasins.`); break;
            case "Afternoon": 
                console.log(`It's ${d} degrees, get your T-Shirt and Sandals.`); break;
            case "Evening": 
                console.log(`It's ${d} degrees, get your Shirt and Moccasins.`); break;
        } 
    } else {
        switch(time) {
            case "Morning":
                console.log(`It's ${d} degrees, get your T-Shirt and Sandals.`); break;
            case "Afternoon":
                console.log(`It's ${d} degrees, get your Swim Suit and Barefoot.`); break;
            case "Evening": 
                console.log(`It's ${d} degrees, get your Shirt and Moccasins.`); break;
    }
    }
}

summerOutfit(["28", "Evening"]);