function cinemaTickets(input) {
    let index=0;
    let command=input[index];
    let kidcounter=0;
    let studentcounter=0;        
    let standartcounter=0;
    let total=0;
    while (command!=="Finish") {
        let isFull=false;
        let movie=input[index];
        index++;
        let freeSpace=Number(input[index]);
        index++;
        let ticket=input[index];
        let ticketCounter=0;
        for (let p=index;p<=index+freeSpace;p++) {
            let currentTicket=input[p];
            if (currentTicket=="End" || ticketCounter==freeSpace) {
                break;
            }
            total++;
             if (currentTicket=="kid") {
                 kidcounter++;
             } else if (currentTicket=="student") {
                 studentcounter++;
             } else {
                 standartcounter++;
             }
             ticketCounter++;
             index++;
        }
        let percentageFull=ticketCounter/freeSpace*100;
        console.log(`${movie} - ${percentageFull.toFixed(2)}% full.`);
        if (percentageFull===100) {
            command=input[index];
        } else {
        index++;
        command=input[index];
        } 
    }
    console.log(`Total tickets: ${total}`)
    console.log(`${(studentcounter/total*100).toFixed(2)}% student tickets.`);
    console.log(`${(standartcounter/total*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidcounter/total*100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Shutter Island",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"])
