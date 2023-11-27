function sequence2k1(input) {
    let n=Number(input[0]);
    let index=0;
    while (index<n) {
        index=2*index+1;
        if (index>n) {
            break;
        }
        console.log(index);
    }
}

sequence2k1(["17"])