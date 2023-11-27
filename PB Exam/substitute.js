function substitute(input) {
    let k=Number(input[0]);
    let l=Number(input[1]);
    let m=Number(input[2]);
    let n=Number(input[3]);
    let sub=0;
    let firstNumber="";
    let secondNumber="";
    let isFinish=false;
        for (let a=k;a<=8;a++) {
            for (let b=9;b>=l;b--) {
                firstNumber=`${a}${b}`;
                for (let c=m;c<=8;c++) {
                    for(let d=9;d>=n;d--) {
                    secondNumber=`${c}${d}`;
                    if (Number(firstNumber[0])%2==0 && Number(firstNumber[1])%2!==0 && Number(secondNumber[0])%2==0 && Number(secondNumber[1])%2!==0) {
                        if (Number(firstNumber)===Number(secondNumber)) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            console.log(`${firstNumber} - ${secondNumber}`)
                            sub++;
                            if (sub===6) {
                                isFinish=true;
                                break;
                            }
                        }
                    }
                    }
                    if (isFinish) {
                        break;
                    }
                }
                if (isFinish) {
                    break;
                }
            }
            if (isFinish) {
                break;
            }
        }
    }
substitute(["6",
"7","5","6"])
