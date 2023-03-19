document.addEventListener("DOMContentLoaded", function(event) { // to prevent the javascript code running before the HTML code. 

console.log("If this line is visisble in the screen, then it mean my java scrip is working");
console.log("It seems it's working now. Yaaaay!");  // to give some outputs in the console which is not directly visible in the main page. 

window.alert("this is the check if the alert function is working"); // to give the alert box while opening the page. 

let firstname = "Ajay";
let age = 21;
let isAdult = (age>18);

console.log("Hey there, Iam ", firstname);
console.log("Also, iam ", age," year old.");
console.log("Do you think I am adult? Well it's ",isAdult);

document.getElementById("A1").innerHTML ="Hey there, Iam " + firstname;
document.getElementById("A2").innerHTML ="Also, iam "+ age+ " year old."; // to give the out put in the main page through taking the details from console. 

// this is a comment sections that should not reflect in the page or effect the code. 

// I am gonnna start testing some artithamatic expressions in the variables using the java script. 

let NumberOfPeople =21;
document.getElementById("A3").innerHTML= "The number of people in the room is now: "+ NumberOfPeople;
document.getElementById("A4").innerHTML= "When two people are left, the number now is :"+ (NumberOfPeople-2);
document.getElementById("A5").innerHTML= "Later 5 more people came back, now the number of people are "+((NumberOfPeople-2)+5);
NumberOfPeople = (((NumberOfPeople-2)+5)-12);
document.getElementById("A6").innerHTML=" There is the bus, 12 people left now. I could see "+NumberOfPeople+ " people in the room now";
NumberOfPeople = NumberOfPeople*2;
document.getElementById("A7").innerHTML="All the people in the room called their spouse for the party, now number of people are "+ NumberOfPeople;
});