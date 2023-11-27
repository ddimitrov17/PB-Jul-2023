function oscars(input) {
    let actor=input[0];
    let points=Number(input[1]);
    let count=input[2];
    for (i=3;i< input.length;i++) {
        let j=input[i];
        i++;
        let pointsj=input[i];
        points=points+j.length*pointsj/2;
        if (points>1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    if (points<=1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5-points).toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])