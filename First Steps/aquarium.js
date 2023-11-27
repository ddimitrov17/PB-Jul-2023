function aquarium(input) {
    let l=Number(input[0]);
    let s=Number(input[1]);
    let h=Number(input[2]);
    let z=Number(input[3])/100;
    let v=(l*s*h)*0.001;
    let f=v*(1-z);
    console.log(f);
}

aquarium(["85","75","47","17"]);