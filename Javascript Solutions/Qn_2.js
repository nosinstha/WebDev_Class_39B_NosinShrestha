let unit = 60;
let total_bill = 0;

if (unit <= 50 && unit >= 0) {
    total_bill = unit * 5;
} else if (unit <= 100 && unit > 50) {
    total_bill = unit * 7;
} else if (unit <= 200 && unit > 100) {
    total_bill = unit * 10;
} else if (unit > 200) {
    total_bill = unit * 12;
} else {
    console.log("Invalid unit");
}

console.log("The total bill is: "+total_bill)