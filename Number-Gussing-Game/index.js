let guess, numberofguess, number;

document.getElementById("Tips").innerHTML=
"<pre>Please enter a number between 1-50 to find the correct one behind the code.<br><br>"+ "Tips : <br>" +
"Little More or Less           : Actual number within the range or 5. <br>"+
"More or Less                  : Actual number within the range or 10. <br>"+
"Too larger or Lower          : Actual number within 20 range. <br>"+
"Not near                       : Actual number is more than 20 range. <br>";
numberofguess =0;
number = Math.round((Math.random()*50)+1);

document.getElementById("button").onclick = function(){
guess = parseInt(document.getElementById("input").value);
numberofguess++;

switch(true)
{
   case ((guess>number)&&(Math.abs(guess-number)>20)):
    document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is too large from the actual number."
    +"<br> This is your "+numberofguess+" guess.";
    break;

   case ((guess>number)&&(Math.abs(guess-number)<=20)&&(Math.abs(guess-number)>10)):
    document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is larger from the actual number."
    +"<br> This is your "+numberofguess+" guess.";
   break;

   case ((guess>number)&&(Math.abs(guess-number)<=10)&&(Math.abs(guess-number)>5)):
    document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is little larger from the actual number."
    +"<br> This is your "+numberofguess+" guess.";
   break;

   case ((guess>number)&&(Math.abs(guess-number)<=5)):
    document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is very close to the actual number."
    +"<br> This is your "+numberofguess+" guess.";
   break;

   case ((guess<number)&&(Math.abs(guess-number)>20)):
    document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is too low from the actual number."
    +"<br> This is your "+numberofguess+" guess.";
    break;

   case ((guess<number)&&(Math.abs(guess-number)<=20)&&(Math.abs(guess-number)>10)):
        document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is lower from the actual number."
        +"<br> This is your "+numberofguess+" guess.";
    break;

    case ((guess<number)&&(Math.abs(guess-number)<=10)&&(Math.abs(guess-number)>5)):
        document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is little lower from the actual number."
        +"<br> This is your "+numberofguess+" guess.";
    break;

    case ((guess<number)&&(Math.abs(guess-number)<=5)):
        document.getElementById("Result").innerHTML= "The guess you have entered is : "+guess+ " and is very close to the actual number."
        +"<br> This is your "+numberofguess+" guess.";
    break;

   default:
    number = Math.round((Math.random()*50)+1);
    document.getElementById("Result").innerHTML= "This is the correct answer"+"<br> This is your "+numberofguess+" guess."+"Please enter a valid number between 1 and 50."+"<br>";
    
    
}
}




