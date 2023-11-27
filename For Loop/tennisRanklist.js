function tennisRanklist(input) {
    let tournaments=Number(input[0]);
    let points=Number(input[1]);
    let averagePoints=0;
    let won=0;
    for (i=2;i< input.length;i++) {
        let current=input[i];
        switch (current) {
            case "W": {
                points+=2000;
                averagePoints+=2000;
                won++;
            } break;
            case "F": {
                points+=1200;
                averagePoints+=1200;
            } break;
            case "SF": {
                points+=720;
                averagePoints+=720;
            } break;
        }
    }
    averagePoints=Math.floor(averagePoints/tournaments);
    won=(won/tournaments*100).toFixed(2);
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${won}%`);
}

tennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])