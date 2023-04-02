
function function1(){

    document.getElementById("function1").innerHTML = "This is the first function but supposed to only excute after 10 seconds";

}
function function2(){

    document.getElementById("function2").innerHTML = "This is the second function but supposed to only excute after 15 seconds";
    
}

function function3(){

    document.getElementById("function3").innerHTML = "This is the 3rd function but supposed to only excute after 5 seconds";
}

let a = setTimeout(function1, 10000);
let b = setTimeout(function2,15000);
let c = setTimeout(function3,5000 )


document.getElementById("Skip").onclick = function()
{
   clearTimeout(a);
   clearTimeout(b);
   clearTimeout(c);
   function1();
   function2();
   function3();

}


