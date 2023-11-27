function histogram(input) {
    let count=Number(input[0]);
    let p1=0; 
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;
    for(i=1;i<count+1;i++) {
        if (Number(input[i])<200) {
            p1++;
        } else if (Number(input[i])<=399) {
            p2++;
        } else if (Number(input[i])<=599) {
            p3++;
        } else if (Number(input[i])<=799) {
            p4++;
        } else {
            p5++;
        }
    }
    console.log(`${(p1/count*100).toFixed(2)}%`);
    console.log(`${(p2/count*100).toFixed(2)}%`);
    console.log(`${(p3/count*100).toFixed(2)}%`);
    console.log(`${(p4/count*100).toFixed(2)}%`);
    console.log(`${(p5/count*100).toFixed(2)}%`);
}

histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])