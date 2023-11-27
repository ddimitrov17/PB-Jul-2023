function graduation(input) {
    let name=input[0];
    let index=0;
    let failed=0;
    let sum=0;
    let i=1;
    while (i<=12) {
        index++;
        let grade=Number(input[index]);
        if (grade<4.00) {
            failed++;
            if (failed===2) {
                console.log(`${name} has been excluded at ${i-1} grade`)
                break;
            }
        }
        sum+=grade;
        i++;
    }
    let avg=sum/12;
    if (failed<2) {
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])