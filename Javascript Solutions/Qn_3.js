let age = 18;
if (age < 13 && age > 0) {
    console.log("Child");
} else if (age >= 13 && age < 20) {
    console.log("Teenager");
} else if (age >= 20 && age < 60) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}