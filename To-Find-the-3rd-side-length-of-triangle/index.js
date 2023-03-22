let a,b;

document.getElementById("Enter").onclick=function(){

  a=document.getElementById("Side1").value;
  b=document.getElementById("Side2").value;
  document.getElementById("R1").innerHTML= "<br>The Side A: "+a+"<br> The Side B: "+b +"<br><br> The Side C :"+ Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));

}