function coins(input) {
    let money=Number(input[0]);
    let inCoins=Math.floor(100*money);
    let coin=0;
    while (inCoins>0) {
        if (inCoins>=200) {
            inCoins-=200;
            coin++;
        } else if (inCoins>=100) {
            inCoins-=100;
            coin++;
        } else if (inCoins>=50) {
            inCoins-=50;
            coin++;
        } else if (inCoins>=20) {
            inCoins-=20;
            coin++;
        } else if (inCoins>=10) {
            inCoins-=10;
            coin++;
        } else if (inCoins>=5) {
            inCoins-=5;
            coin++;
        } else if (inCoins>=2) {
            inCoins-=2;
            coin++;
        } else if (inCoins>=1) {
            inCoins-=1;
            coin++;
        }
    }
    console.log(`${coin}`);
}

coins(["1.23"])
