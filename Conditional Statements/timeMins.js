function timeMins(input) {
    let hours=Number(input[0]);
    let mins=Number(input[1]);
    if (mins>=45) {
        hours+=1;
        mins=(mins+15)-60;
    } else {
        mins+=15;
    }
    if (hours===24) {
        hours=0;
    }
    if (mins<10) {
    console.log(`${hours}:0${mins}`);
    } else {
    console.log(`${hours}:${mins}`);
    }
}

timeMins(["23", "59"])