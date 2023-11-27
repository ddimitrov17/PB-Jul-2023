function trainTheTrainers(input) {
    let n=Number(input[0]);
    let index=1;
    let command=input[index];
    let sumAvg=0;
    let presCounter=0;
    while (command!=="Finish") {
        let presentation=command;
        presCounter++;
        let avgGrade=0;
        for (let j=1;j<=n;j++) {
            avgGrade=avgGrade+Number(input[index+j]);
        }
        sumAvg+=Number(avgGrade);
        console.log(`${presentation} - ${(avgGrade/n).toFixed(2)}.`);
        index+=n+1;
        command=input[index];
    }
    console.log(`Student's final assessment is ${(sumAvg/(n*presCounter)).toFixed(2)}.`);
}

trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])