
let distance = 1001


if (distance <= 100) {
    console.log("Amount to pay is:", 5, "USD")
}
else if (distance >= 101 && distance <= 500) {
    console.log("Amount to be paid is:", 10, "USD")

}
else if (distance >= 501 && distance <= 1000) {
    console.log("Amount to bee paid is:", 20, "USD")
}
else {
    console.log("Amouunt to be paid is:", 40, "USD")
}


let x = 5 // number
let y = "5"; //String

console.log(x == y ); //True
console.log(x === y); // false