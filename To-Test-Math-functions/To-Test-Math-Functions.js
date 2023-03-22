

/* Here I am gonna test the below Math. functions 
Math.round(); - to round the number
Math.ceil(); to round the value up
Math.floor(); to round the value down. 

Math.pow(x,y); to see the power of the number 
Math.sqrt(x); to see the square root of the number 

Math.abs(x); to see the distance away from zero. Abasalute value. To conver the value to +ve number we can use it more. 

Math.max(x,y,z); to see the big number. 
Math.min(x,y,z); to see the lowest number. 

x = Math.PI; - to assign the value of the PI to x; 
*/

let C1;

document.getElementById("RoundIn").onclick=function(){ 
C1=document.getElementById("RoundTxt").value;
document.getElementById("RoundResult1").innerHTML= "The Value you are entered is " +C1;
C1=Math.round(C1);
document.getElementById("RoundResult2").innerHTML="After round now it's value is "+C1;
}



document.getElementById("RoundLowIN").onclick=function()
{
    C1=document.getElementById("RoundLowTxt").value;
    document.getElementById("RoundDownResult1").innerHTML= "The Value you are entered is "+C1;
    C1=Math.floor(C1);
    document.getElementById("RoundDownResult2").innerHTML="After rounded down now it's value is "+C1;
}



document.getElementById("RoundUpIn").onclick=function()
{

    C1=document.getElementById("RoundUpTxt").value;
    document.getElementById("RoundUpResult1").innerHTML= "The Value you are entered is "+C1;
    C1=Math.ceil(C1);
    document.getElementById("RoundUpResult2").innerHTML="After rounded up now it's value is "+C1;
}

//-------------------------------------------

document.getElementById("PowerIn").onclick=function()
{
    C1=document.getElementById("Power1Txt").value;
    C2=document.getElementById("Power2Txt").value;
    document.getElementById("PowerResult1").innerHTML= "The Value you are entered is "+C1 + " and " + C2;
    C1 = Math.pow(C1,C2);
    document.getElementById("PowerResult2").innerHTML="The power value now is "+C1;
}

//-------------------------------------------
    
document.getElementById("SqrtIn").onclick=function()
{
    C1=document.getElementById("SqrtTxt").value;
    document.getElementById("RootResult1").innerHTML= "The Value you are entered is "+C1;
    C1=Math.sqrt(C1);
    document.getElementById("RootResult2").innerHTML="The SquareRoot Value of it is "+C1;
}

//-------------------------------------------

document.getElementById("AbsoluteIn").onclick=function(){
    C1=document.getElementById("AbsoluteTxt").value;
    document.getElementById("AbsoluteResult1").innerHTML= "The Value you are entered is "+C1;
    C1=Math.abs(C1);
    document.getElementById("AbsoluteResult2").innerHTML="The Absolute Value of it is "+C1;
}

//-------------------------------------------
    
document.getElementById("SmallIn").onclick=function(){
    C1=document.getElementById("SmallTxt").value;
    C2=document.getElementById("SmallTxt").value;
    C3=document.getElementById("SmallTxt").value;
    document.getElementById("SmallResult1").innerHTML=  "The Values you have entered is "+C1+", "+C2 + ", "+C3;
    C1=Math.max(C1,C2,C3);
    document.getElementById("SmallResult2").innerHTML="After round now it's value is "+C1;


}

document.getElementById("LargeIn").onclick=function(){
    C1=document.getElementById("Large1Txt").value;
    C2=document.getElementById("Large2Txt").value;
    C3=document.getElementById("Large3Txt").value;
    document.getElementById("LargeResult1").innerHTML= "The Values you have entered is "+C1+", "+C2 + ", "+C3;
    C1= Math.min(C1);
    document.getElementById("LargeResult2").innerHTML="After round now it's value is "+C1;


}