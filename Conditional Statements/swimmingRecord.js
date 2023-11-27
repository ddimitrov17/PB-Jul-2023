function swimmingRecord(input) {
    let record=Number(input[0]);
    let meters=Number(input[1]);
    let secsPerMeter=Number(input[2]);
    let time=meters*secsPerMeter;
    //console.log(time);
    let slowing=(Math.floor(meters/15))*12.5;
    //console.log(slowing);
    let totalTime=time+slowing;
    //console.log(totalTime);
    if (totalTime>=record) {
        console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

swimmingRecord(["55555.67",

"3017","5.03"]);