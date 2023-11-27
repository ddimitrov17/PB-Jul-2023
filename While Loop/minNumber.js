function minNumber(input) {
    let n=input[0];
    let index=1;
    let min=Number.MAX_SAFE_INTEGER;
    while (n!=="Stop") {
        let current=Number(n);
        if (current<min) {
            min=current;
        }
        n=input[index];
        index++;
    }
    console.log(min)
}

minNumber(["100",

"99",

"80",

"70",

"Stop"])