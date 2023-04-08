let Name, age, job, place, hobby;
Name = "Ajay Hrishi V";
age = "22";
job = "Customer Care";
place = "Bangalore";
hobby = "Coding";

let a = document.getElementById("templateliterals1");
let b = document.getElementById("templateliterals2");
let c = document.getElementById("templateliterals3");

a.innerHTML = `The person who made this page is ${Name} and he is ${age} old.`;
b.innerHTML = `He is currently working in a ${job} job at ${place}`;
c.innerHTML = `And if he likes any job more than ${job} that is ${hobby}`;