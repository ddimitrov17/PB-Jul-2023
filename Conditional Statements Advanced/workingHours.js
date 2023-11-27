function workingHours(input) {
    let time=Number(input[0]);
    let day=input[1];
    if (day!=="Sunday") {
        if (time >=10 && time<=18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

workingHours(["10",

"Monday"])