let mainstring,v1,v2,v3;

//-----------------------------------------------------
document.getElementById("LengthOfStringB").onclick=function(){

mainstring= document.getElementById("LengthOfString").value;
v3 = mainstring.length;
document.getElementById("LengthOfStringR1").innerHTML= "The String Entered: <br>"+mainstring;
document.getElementById("LengthOfStringR2").innerHTML= "The length of it is: "+v3;
}


//-----------------------------------------------------


document.getElementById("LetterInStringB").onclick=function(){

mainstring= document.getElementById("LetterInString").value;
v1= document.getElementById("Position1").value;
document.getElementById("LetterInStringR1").innerHTML= "The String Entered: "+mainstring+ 
"<br>The position you have entered is: "+v1;

document.getElementById("LetterInStringR2").innerHTML= "The letter at the position "+v1+" in the string is "+mainstring.charAt(v1);
}


//-----------------------------------------------------
document.getElementById("PositionInStringB").onclick=function(){


    mainstring= document.getElementById("PositionInString").value;
    v1= document.getElementById("Position2").value;
    document.getElementById("PositionInStringR1").innerHTML= "The String Entered: "+mainstring+ 
    "<br>The letter you have entered is: "+v1;
    
    document.getElementById("PositionInStringR2").innerHTML= "The letter "+v1+" is at the position "+mainstring.indexOf(v1);
}

//-----------------------------------------------------
document.getElementById("LastPositionLetterInStringB").onclick=function(){

    mainstring= document.getElementById("LastPositionLetterInString").value;
    v1= document.getElementById("Position3").value;
    document.getElementById("LastPositionLetterInStringR1").innerHTML= "The String Entered: "+mainstring+ 
    "<br>The letter you have entered is: "+v1;
    
    document.getElementById("LastPositionLetterInStringR2").innerHTML= "The letter "+v1+" is lastly mentioned in the string at the position of "+mainstring.lastIndexOf(v1);

}
//-----------------------------------------------------
document.getElementById("ClearSpaceStringB").onclick=function(){

    mainstring= document.getElementById("ClearSpaceString").value;
    document.getElementById("ClearSpaceStringR1").innerHTML= "The String Entered: "+mainstring;
    //document.getElementById("ClearSpaceStringR2").innerHTML= "After remove the spaces from the string now it is :"+ (mainstring.trim());
    mainstring = mainstring.replaceAll(" ", "");
    document.getElementById("ClearSpaceStringR2").innerHTML= "After remove the spaces from the string now it is :"+mainstring;
}

//-----------------------------------------------------
document.getElementById("StringToUppercaseB").onclick=function(){


    mainstring= document.getElementById("StringToUppercase").value;
    document.getElementById("StringToUppercaseR1").innerHTML= "The String Entered: "+mainstring;


    document.getElementById("StringToUppercaseR2").innerHTML= "After remove the spaces from the string now it is :"+(mainstring.toUpperCase());




}
/*
//-----------------------------------------------------
document.getElementById("").onclick=function(){






}
//-----------------------------------------------------
document.getElementById("").onclick=function(){






}
//-----------------------------------------------------
document.getElementById("").onclick=function(){






}
//-----------------------------------------------------
document.getElementById("").onclick=function(){






}*/