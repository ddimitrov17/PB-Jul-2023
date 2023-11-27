function operationsBetweenNumbers(input) {
    let n1=Number(input[0]);
    let n2=Number(input[1]);
    let op=input[2];
    let sum=0;
    let e=" ";
    if (op=="+") {
        sum=n1+n2;
        if (sum%2==0) {
            e=`even`;
        } else { 
        e=`odd`;
        }
        console.log(`${n1} ${op} ${n2} = ${sum} - ${e}`);
    } else if (op=="-") {
        sum=n1-n2;
        if (sum%2==0) {
            e=`even`;
        } else { 
        e=`odd`;
        }
        console.log(`${n1} ${op} ${n2} = ${sum} - ${e}`);
    } else if (op=="*") {
        sum=n1*n2;
        if (sum%2==0) {
            e=`even`;
        } else { 
        e=`odd`;
        }
        console.log(`${n1} ${op} ${n2} = ${sum} - ${e}`);
    } else if (op=="/") {
        sum=(n1/n2).toFixed(2);
        if (n2===0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${sum}`);
        }
    } else if (op=="%") {
        sum=n1%n2;
        if (n2===0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${sum}`);
        }
    }
}

operationsBetweenNumbers(["10", "0", "%"])