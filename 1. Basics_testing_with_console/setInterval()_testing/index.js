let max, count, output;
count = 1;
output = 1;

document.getElementById("button").onclick = function(){
   
 max = document.getElementById("Max").value;
 max = Number(max);
 if(isNaN(max))
  {
    document.getElementById("Intro").innerHTML = "Dude you have to enter a number. Please do that."
    clearInterval(stoper);
  }
  else if (max=="")
  {
    document.getElementById("Intro").innerHTML = "You have not entered anything in the box. Please do that first."
    clearInterval(stoper);
  }
  else
  {
    document.getElementById("Intro").innerHTML = "Here the number printing start from 1 and end at "+max;
}
const stoper = setInterval(outputfunction, 1000);
function outputfunction() {
  document.getElementById("Output").innerHTML = output;
  if (max <= count) {
    clearInterval(stoper);
  }
  count += 1;
  output = output + "<br>"+ count;
}
}

