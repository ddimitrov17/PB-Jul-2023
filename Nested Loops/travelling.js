function travelling(input) {
    let destination=input[0];
    let requiredBudget=Number(input[1]);
    let saved=0;
    let goingTo=false;
    let a= input.length;
    let current=0;
    for (let i=2;i<a;i++) {
        if (input[i]==="End") {
            break;
        }
        current=Number(input[i]);  
        saved+=current;
      if (saved>=requiredBudget) {
        saved=0;
        console.log(`Going to ${destination}!`);
        goingTo=true;
        let h=i+1;
        destination=input[h];
        h++;
        requiredBudget=input[h];
        i+=2;
      } 
    }
}

travelling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])