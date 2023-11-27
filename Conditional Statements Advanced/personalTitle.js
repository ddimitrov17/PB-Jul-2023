function personalTitle(input) {
    let age=Number(input[0]);
    let type=input[1];
    if (age<16) {
        if (type==="f") {
            console.log ("Miss")
        } else {
            console.log("Master")
        }
    } else {
        if (type==="m") {
            console.log("Mr.")
        } else {
            console.log("Ms.")
        }
    }
}

personalTitle(["13.5", "m"])