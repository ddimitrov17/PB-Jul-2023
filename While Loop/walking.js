function walking(input) {
    let totalSteps=0;
    let index=0;
    let command=input[index];
    while (true) {
        if (command==="Going home") {
            index++;
            command=Number(input[index]);
            totalSteps+=command;
            if (totalSteps>=10000) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps-10000} steps over the goal!`);
            } else {
                console.log(`${10000-totalSteps} more steps to reach goal.`);
            }
            break;
        }
        command=Number(input[index]);
        totalSteps+=command;
        if (totalSteps>=10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps-10000} steps over the goal!`);
            break;
        }
        index++;
        command=input[index];
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])