let grossincome = "ppp"

if (grossincome <= 5999){
    console.log("monthly contribution is:", 150 ,"KSH" )
}
else if(grossincome >= 6000 && grossincome <=7999){
    console.log("The monthly contribution is:",300.,"KSH")
}
else if(grossincome >= 8000 && grossincome <=11999){
    console.log("The monthly contribution is:",400,"KSH")
}
else if(grossincome >= 12000 && grossincome <= 14999){
    console.log("The monthly contribution is:",500,"KSH")
}
else if(grossincome >= 15000 && grossincome <= 19999){
    console.log("The monthly contribution is:",600,"KSH")
}
else if(grossincome >= 20000 && grossincome <= 24999){
    console.log("The monthly contribution is:",750,"KSH")
}
else if(grossincome >= 25000 && grossincome <= 29999){
    console.log("The monthly contribution is:",850,"KSH")
}
else if(grossincome >= 30000 && grossincome <= 49999){
    console.log("The monthly contribution is:",1000,"KSH")
}
else if(grossincome >= 50000 && grossincome <= 99999){
    console.log("The monthly contribution is:",1500,"KSH")
}
else if(grossincome >= 100000){
    console.log("The monthly contribution is:",2000,"KSH")
}
else{
    console.log("The input is invalid")
}

console.log("=========================")
//Create a for loop that is able to print out all the lleap years froom 2002 to 2026
for (let year = 2002; year <= 2026; year++) {
    // Check if leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}

console.log("=========================")
// Check the tasks on page 30 of the book
// Write a for loop to print all odd numbers from 1 to 19.
for (let i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("=========================")
// Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("=========================")


// Research on arrow function, functions with parameters and anonymous functions in javascript.

