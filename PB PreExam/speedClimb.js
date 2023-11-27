function speedClimb(input) {
    let recordInSec=Number(input[0]);
    let distanceInMeters=Number(input[1]);
    let timeFor1M=Number(input[2]);
    let slower=Math.floor(distanceInMeters/50)*30;
    let totalTime=distanceInMeters*timeFor1M+slower;
    if (recordInSec>totalTime) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime-recordInSec).toFixed(2)} seconds slower.`);
    }
}

speedClimb(["1377",

"389",

"3"])