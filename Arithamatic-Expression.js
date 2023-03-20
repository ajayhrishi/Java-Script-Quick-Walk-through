window.onload = function() {
let age = window.prompt("hey dude, please enter your age in the below box for me to test my code."); 
console.log("So you are ", age, ", nice. Now let's see how we can display it in the main page.")

document.getElementById("A1").innerHTML = "Here I am just testing if the age is updated as "+age+ " or not.";

}