function hotelRoom(input) {
    let month=input[0];
    let n=Number(input[1]);
    let ap=0;
    let st=0;
    if (month=="May" || month=="October") {
        ap=65*n;
        st=50*n;
    } else if (month=="June" || month=="September") {
        st=75.2*n;
        ap=68.7*n;
    } else {
        st=76*n;
        ap=77*n;
    }
    //discounts
    if ((month=="May" || month=="October") && n>7 && n<15) {
        st*=0.95;
    }
    if ((month=="May" || month=="October") && n>14) {
        st*=0.7;
    }
    if ((month=="June" || month=="September") && n>14) {
        st*=0.8;
    }
    if (n>14) {
        ap*=0.9;
    }
    console.log(`Apartment: ${ap.toFixed(2)} lv.`);
    console.log(`Studio: ${st.toFixed(2)} lv.`);
}

hotelRoom(["May",

"15"])

