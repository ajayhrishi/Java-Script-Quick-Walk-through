window.onload = function() {


//---------------------------------------------------
let age = window.prompt("hey dude, please enter your age in the below box for me to test my code."); 
console.log("So you are ", age, ", nice. Now let's see how we can display it in the main page.")
document.getElementById("A1").innerHTML = "Here I am just testing if the age is updated as "+age+ " or not.";

//---------------------------------------------------
let ALA = Number("2.24");
console.log(ALA, typeof ALA);

let ALB = String(2.24);
console.log(ALB, typeof ALB);

let ALC = Boolean(2.24);
console.log(ALC, typeof ALC);
//---------------------------------------------------

let AAA;

document.getElementById("toNumberIN").onclick=function(){AAA = document.getElementById("toNumber").value;
document.getElementById("toNumber-result").innerHTML = "the content you have entered is "+AAA
+ " and when we try to convert it to the number it will give the result "+ 
Number(AAA)+ ", Adding to this, the data type of this variable is a "+(typeof AAA);

AAA = Number(AAA); // here i am trying to check if the data type is chaning or not. 
document.getElementById("R1").innerHTML= "Changed to the "+(typeof AAA)+ " Data type premenantly and the value is " + AAA;
}

let AAB;

document.getElementById("toStringIN").onclick=function(){ AAB=document.getElementById("toString").value;
document.getElementById("toString-result").innerHTML=

"the content you have entered is "+AAB
+ " and when we try to convert it to the string it will give the result "+ 
String(AAB)+ ", Adding to this, the data type of this variable is a "+(typeof AAB);

AAB = Number(AAB); // here i am trying to check if the data type is chaning or not. 
document.getElementById("R2").innerHTML= "Changed to the "+(typeof AAA)+ " Data type premenantly and the value is " + AAA;
}

let AAC; 

document.getElementById("toBooleanIN").onclick= function(){ AAC= document.getElementById("toBoolean").value;
document.getElementById("toBoolean-result").innerHTML= "the content you have entered is "+AAC
+ " and when we try to convert it to the boolean it will give the result "+ 
Boolean(AAC)+ ", Adding to this, the data type of this variable is a "+(typeof AAC);

document.getElementById("R3").innerHTML= "Changed to the "+(typeof AAC)+ " Data type premenantly and the value is " + AAC;




}

}