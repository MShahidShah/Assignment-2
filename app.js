// ==============USER INPUT & CONDITIONAL STATEMENT==============

//1).
// var cityName = prompt ("Enter Your City Name:");

// if (cityName === "karachi") {
//     console.log("Welcome to city of light..")
// }

//2).
// var gender = prompt ("What is your Gender?");

// if (gender === "male"){
//     console.log("Good Morning Sir !..")
// }

// else if (gender === "female"){

//         console.log("Good Morning Ma'am !..")
//     }

// else {
//     console.log("Good Morning! Wht's Yours Gender?..")
// }

//3).
// var signalColor = prompt ("Signal Colour?");

// if (signalColor === "red") {
//     console.log("Must Stop!..")
// }
// else if (signalColor === "yellow") {
//     console.log("Ready to move!..")
// }
// else if  (signalColor === "green") {
//     console.log("Move Now!..")
// }
// else {
// console.log("Choose Colour!..")
// }

//4).
// var remainFuel = +prompt("input remaining fuel in car?");

// if (remainFuel <= "0.25"){
//     console.log("Please refill the fuel in your car");
// }
// else {
//     console.log("You have fuel in your car..");
// }

//5).
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }// true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//83 is right answer

// True Condition
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//wrong condition

// if (c === 13){
//     alert("condition 2 is true");
//     }// wrong condition

// if (++c < 14){
//     alert("condition 3 is true");
//     }//it's true condition..

// if(c === 14){
//     alert("condition 4 is true");
//     }//wrong

// if(c === 14){
//     alert("condition 4 is true");
//     }//wrong

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals" + " " + totalCost);//22,000
// }

// e.
// if (true){
//     alert("True");
//     }//print elert true..
// if (false){
//     alert("false");
//     }

// f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//6).

// var englishPaper = +prompt("Enter Your English Paper Number?");
// var mathPaper = +prompt("Enter Your Math Paper Number?");
// var physicsPaper = +prompt("Enter Your Physics Paper Number?");
// var totalMarks = +prompt("Enter Total Marks of Paper Number?");
// var obtMarks = englishPaper + mathPaper + physicsPaper;
// var percentage = (obtMarks / totalMarks) * 100;

//     if (percentage >= 80 && percentage <= 100){
//     document.write("<b>"+"Total Marks :" + " " + totalMarks + "<br>" + "Marks obtained :" + " " + obtMarks + "<br>" + "Percentage :" + " " + percentage + "%" + "<br>" + "Grade :" + " " + "A-one" + "<br>" + "Remarks :" + " " + "Excellent" + "</b>")
// }
//     else if (percentage >= 70 && percentage <= 80){
//     document.write("<b>"+"Total Marks :" + " " + totalMarks + "<br>" + "Marks obtained :" + " " + obtMarks + "<br>" + "Percentage :" + " " + percentage + "%" + "<br>" + "Grade :" + " " + "A" + "<br>" + "Remarks :" + " " + "Good" + "</b>")
// }
//     else if (percentage >= 60 && percentage <= 70){
//     document.write("<b>"+"Total Marks :" + " " + totalMarks + "<br>" + "Marks obtained :" + " " + obtMarks + "<br>" + "Percentage :" + " " + percentage + "%" + "<br>" + "Grade :" + " " + "B" + "<br>" + "Remarks :" + " " + "You need to improve" + "</b>")
// }
//     else{
//     document.write("<b>"+"Total Marks :" + " " + totalMarks + "<br>" + "Marks obtained :" + " " + obtMarks + "<br>" + "Percentage :" + " " + percentage + "%" + "<br>" + "Grade :" + " " + "Fail" + "<br>" + "Remarks :" + " " + "Sorry" + "</b>")
//     }
 
//7).
// var guessGame = +prompt("Guess the number 1 to 10");
// var correctNumber = 5
// if (guessGame === correctNumber){
//     console.log("Bingo! Correct answer");
// }
// else if (guessGame === +1){
//     console.log("Close enough to the correct answer.");
// }
// else {
//     console.log("Search again the correct number 1 to 10");
// }
 
//8).
// var numDivisble = prompt("Enter Number");
// if (numDivisble % 3 === 0){
//     console.log("Number! is divisble 3");
// }
// else {
//     console.log("Number! is not a divisble 3")
// }

//9).
// var evenOrOddNumber = prompt("Enter even or odd number");

// if (evenOrOddNumber % 2 === 0){
//     console.log("it's an even number");
// }
//   else if (evenOrOddNumber % 3 === 0){
//     console.log("its an odd number");
//   }
//     else{
//         console.log("it's an prime number");
//     }

//10).
// var temperature = prompt("enter today temperature?");

// if (temperature >= 40){
//     console.log("It is too hot outside.");
// }
//   else if (temperature >= 30){
//     console.log("The Weather today is Normal.");
//   }
//   else if (temperature >= 20){
//     console.log("Today’s Weather is cool.");
//   }
//   else{
//     console.log("OMG! Today’s weather is so Cool.");
//   }

//11).
// var firstNumber = +prompt("enter first number");
// var calculation = prompt("+, -, *, /, %");
// var secondNumber = +prompt("enter  second number");
// var result;

// if (calculation === "+"){
//    result = firstNumber + secondNumber;
//    alert(result);
// }
// else if (calculation === "-"){
//    result = firstNumber - secondNumber;
//    alert(result);
// }
// else if (calculation === "*"){
//    result = firstNumber * secondNumber;
//    alert(result);
// }
// else if (calculation === "/"){
//    result = firstNumber / secondNumber;
//    alert(result);
// }
// else{ (calculation === "%")
//    result = firstNumber % secondNumber;
//    alert(result);
// }



//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// ================IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS=========

// 1).
// var input = prompt("Enter a character:");

// if (input.length === 1) {
//   var char = input.charCodeAt(0);

//   if (char >= 48 && char <= 57) {
//     console.log("The input is a number.");
//   } else if (char >= 65 && char <= 90) {
//     console.log("The input is an uppercase letter.");
//   } else if (char >= 97 && char <= 122) {
//     console.log("The input is a lowercase letter.");
//   } else {
//     console.log("The input is not a number or a letter.");
//   }
// } else {
//   console.log("Please enter a single character.");
// }

//2).
    // var integerNum1 = prompt("enter 1st integer");
    // var integerNum2 = prompt("enter 2nd integer");
    // var largerNum;

    // if (integerNum1 === integerNum2){
    //     console.log("Two Integers Are Equal");
            
    // } else { 
    //     (largerNum = integerNum1 > integerNum2)
    //          console.log(largerNum);
    // }
         
//3).
// var userInput = +prompt("Enter a Number");

//     if (userInput > 0){
//         console.log("The Number Is Posative");
//     } else if (userInput < 0) {
//         console.log("The Number Is Negative");
//     } else { 
//         console.log("The Number Is 0")
//     }

//4).
// var character = prompt("Enter a vovel words:");

// if (character.length === 1){
//    var lowerChararacter = character.toLowerCase();
// //    console.log(lowerChararacter);
    
//    if (lowerChararacter === "a" || lowerChararacter === "e" || lowerChararacter ==="i"
//     || lowerChararacter === "o" || lowerChararacter === "u"){
//     // if (lowerChararacter === "a" && lowerChararacter ==="e"){      
//     console.log(true);
//     }else {
//         console.log(false);
//     }

// }

//5).
// var savePassword = "abc123";
// var password = prompt("Enter your password");

// if (! password){
//     alert("Please enter your password");
// } else if (savePassword === password) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

//6).
// var greetings;
// var hour = 13;
// if (hour < 18){
//     greetings = "Good day";
// }
// else {
//     greetings = "Good Evening";

// } console.log(greetings);

//7).
// var time = +prompt("Enter a time for 24Hours fomat");

// if(time >= 0 && time < 1200){
//     console.log("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good Afternoon")
// } else if (time >= 1700 && time < 2100) {
//     console.log("Good Evening")
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Good Night")
// }
