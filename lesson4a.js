//function with parameters
//Parameters are values that get passed as argumments when we invoke a function
// They help us to create funcctions that can be reeusable through out a program.


function greetings (name){
    console.log("Hello",name,"How have you been?")
}

greetings("Bernard Kim")
greetings("John James")

console.log("==================")


//Below is function with parameters to calculate the sum oof two numbers
function addition(number1,number2){
    sum = number1 + number2
    console.log("The sxum of the numbers is:",sum)
}

addition(45,60)
console.log("==============================")
//Calculate the area of triangle whose base is 20cm and height is 12cm
function multiplication(width,height){
    area = (width * height)/2
    console.log("The area of the triangle is: ",area,"cm\u00B2")
}
multiplication(20,12)
multiplication(10,10)

// Find the simple interest given the principle as 50000, rate as 5% and time 8 years
function interest(principle,rate,time){
    simpleinterest = (principle*rate*time)/100
    console.log("The simple interest is: ",simpleinterest)
}
interest(50000,5,8)/100
