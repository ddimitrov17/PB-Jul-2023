function oscarsCeremony(input) {
    let rent=Number(input[0]);
    let statue=0.7*rent;
    let ca=0.85*statue;
    let sound=0.5*ca;
    let sum=rent+statue+ca+sound;
    console.log(sum.toFixed(2));
}

oscarsCeremony(["5555"])