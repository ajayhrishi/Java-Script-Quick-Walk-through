let Anumber, bool, result;

document.getElementById("input").onclick = function()
{
  Anumber = document.getElementById("Number").value;
  bool= document.getElementById("RNumber");

  document.getElementById("Result1").innerHTML = "The content you have entered is :"+ Anumber;
  if (bool.checked)
  {
    document.getElementById("Result2").innerHTML = "You have select the radio button - it is a number";}
    else {
    document.getElementById("Result2").innerHTML = "You have select the radio button - It is not a number";}

    Anumber = Number(Anumber);
    

    try
    {
        if(isNaN(Anumber)){
            result = "It was not a number that was entered by you.";
            throw "The truth is, It was not a number";
        }
        if(Anumber=="")
        {
            result= "You did not enter any Number at all.";
            throw "You did not enter any Number at all.";
        }
        else
        result= "After we have runned this through the try and catch methoad, we have confirmed that it's a number.";
    }
    catch (error)
    {
        result = error;
    }
    document.getElementById("Result3").innerHTML = result;

}



