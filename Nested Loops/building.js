function building(input) {
    let a=Number(input[0]);
    let b=Number(input[1]);
    let buff=" ";
    for (let i=a;i>=1;i--) {
        for (let c=0;c<b;c++) {
            if (a===i) {
                buff+=`L${i}${c} `;
            } else if (i%2==0){
                buff+=`O${i}${c} `;
            } else {
                buff+=`A${i}${c} `;
            }
            }
        console.log(buff);
        buff=" ";
    }
}

building(["9",

"5"])