function onTimeForTheExam(input) {
    let he=Number(input[0]);
    let me=Number(input[1]);
    let ha=Number(input[2]);
    let ma=Number(input[3]);
    te=me+he*60;
    ta=ma+ha*60;
    //console.log (`${me} ${ma}`);
    if (ta<(te-30)) {
        let diff=te-ta;
        let h=Math.floor(diff/60);
        let min=diff%60;
        console.log(`Early`);
        if (h>0) {
            if (min<10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else if (ta>=(te-30) && ta<=te) {
        let diff=te-ta;
        let min=diff%60;
        console.log(`On time`);
        console.log(`${min} minutes before the start`);
    } else {
        let diff=ta-te;
        let h=Math.floor(diff/60);
        let min=diff%60;
        console.log(`Late`);
        if (h>0) {
            if (min<10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    }
}

onTimeForTheExam(["9", "00", "10", "30"])