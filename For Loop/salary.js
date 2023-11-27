function salary (input) {
    let n=Number(input[0]);
    let s=Number(input[1]);
    for (i=2;i< input.length;i++) {
        let browser=String(input[i]);
        switch (browser) {
            case "Facebook":{
                s-=150;
            } break;
            case "Instagram":{
                s-=100;
            } break;
            case "Reddit":{
                s-=50;
            } break;
        }
        if (s<=0) {
            console.log(`You have lost your salary.`);
            break;
        } 
    }
    if (s>0) {
        console.log(s);
    } 
}

salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])