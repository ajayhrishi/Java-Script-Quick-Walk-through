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


//this is a comment sections that should not reflect in the page or effect the code.//
});