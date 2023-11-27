function figureArea(input) {
    let type=input[0];
    let a=Number(input[1]);
    let b=Number(input[2]);
    let result=0;
    if (type==="square") {
        result=a*a;
    } else if (type==="rectangle") {
        result=a*b;
    } else if (type==="circle") {
        result=Math.PI*Math.pow(a,2);
    } else {
        result=(a*b)/2;
    }
    console.log(result.toFixed(3));
}

figureArea(["square", "5"]);
figureArea(["rectangle", "7", "2.5"]);
figureArea(["circle", "6"]);
figureArea(["triangle", "4.5", "20"]);