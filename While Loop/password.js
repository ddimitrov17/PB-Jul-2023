function password(input) {
    let username=input[0];
    let pass=input[1];
    let index=2;
    while (true) {
        let data=input[index];
        if (data===pass) {
            console.log(`Welcome ${username}!`);
            break;
        } 
        index++;
    }
}

password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])