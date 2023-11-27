function guessPassword(input) {
    let pass=input[0];
    let orig="s3cr3t!P@ssw0rd";
    if (pass===orig) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

guessPassword(["s3sdcr3t!P@ssw0rd"]);