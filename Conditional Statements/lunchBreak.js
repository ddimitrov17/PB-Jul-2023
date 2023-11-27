function lunchBreak(input) {
    let name=input[0];
    let episode=Number(input[1]);
    let breakTime=Number(input[2]);
    let freeTime=breakTime-breakTime/8-breakTime/4;
    //console.log(freeTime);
    if (freeTime>=episode) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeTime-episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episode-freeTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"]);