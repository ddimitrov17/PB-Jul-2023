function examPreparation(input) {
    let badGrades=Number(input[0]);
    let index=1;
    let current=input[index];
    let badGradeCounter=0;
    let task=" ";
    let avg=0;
    let completed=0;
    while (current !== "Enough") {
        task=input[index];
        index++;
        let grade=Number(input[index]);
        if (grade<=4) {
            badGradeCounter++;
            if (badGradeCounter==badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        avg+=grade;
        index++;
        current=input[index];
        completed++;
    }
    if (badGradeCounter<badGrades) {
        console.log(`Average score: ${(avg/completed).toFixed(2)}`);
        console.log(`Number of problems: ${completed}`);
        console.log(`Last problem: ${task}`);
    }
}

examPreparation(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])