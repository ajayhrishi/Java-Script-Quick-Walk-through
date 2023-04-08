window.onload = function() {
console.log("JS file loaded");
let string = "2342344235645.2398345623";
document.getElementById("ActualString").innerText = string;
let US = string.toLocaleString("en-US");
document.getElementById("USEnglish").innerHTML = US;
document.getElementById("INDEnglish").innerText = string.toLocaleString("hi-IN");
document.getElementById("GermanEnglish").innerText = string.toLocaleString("de-DE");

console.log(string.toLocaleString("en-US"));
console.log(string.toLocaleString("hi-IN"));
console.log(string.toLocaleString("de-DE"));
}