function sumPrimeNonPrime(input) {
    let index=0;
    let command=input[index];
    let sumPrime=0;
    let sumNonPrime=0;
    while (command!=="stop") {
        let isNonPrime =false;
        let current=Number(command);
        if (current<0) {
            index++;
            command=input[index];
            console.log(`Number is negative.`);
            continue;
        } 
        for (let j=2;j<current;j++) {
            if (current%j==0) {
                sumNonPrime+=current;
                isNonPrime=true;
                break;
            } 
        }
        if (!isNonPrime) {
            sumPrime+=current;
        } 
        index++;
        command=input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])