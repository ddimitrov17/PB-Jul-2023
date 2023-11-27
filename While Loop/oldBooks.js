function oldBooks(input) {
    let book=input[0];
    let index=1;
    let checked=0;
    let command=input[index];
    let isFound=false;
    while (command !== "No More Books") {
        if(command===book) {
            console.log(`You checked ${checked} books and found it.`);
            isFound=true;
            break;
        }
        checked++;
        index++;
        command=input[index];
    }
    if (isFound==false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${checked} books.`);
    }
}

oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])