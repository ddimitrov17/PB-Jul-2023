function everest(input) {
    let index=0;
    let command=input[index];
    let days=1;
    let sum=5364;
    let isDone=false;
    while (command!=="END") {
        let rest=input[index];
        if (rest==="Yes") {
            days++;
        }
        if (days>5) {
            break;
        }
        index++;
        let meters=Number(input[index]);
        sum+=meters;
        if (sum>=8848) {
            console.log(`Goal reached for ${days} days!`);
            isDone=true;
            break;
        }
        index++;
        command=input[index];
    }
    if (!isDone || sum<8848) {
        console.log(`Failed!`);
        console.log(sum);
    }
}

everest(["Yes",
"535",
"No",
"849",
"Yes",
"499",
"No",
"400",
"Yes",
"500",
"Yes","900"])




