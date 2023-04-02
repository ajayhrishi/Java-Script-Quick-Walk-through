

setTimeout(function1, 10000);
setTimeout(function2,15000);
setTimeout(function3,5000 )



function function1(){

    document.getElementById("function1").innerHTML = "This is the first function but supposed to only excute after 10 seconds";

}
function function2(){

    document.getElementById("function2").innerHTML = "This is the second function but supposed to only excute after 15 seconds";
    
}

function function3(){

    document.getElementById("function3").innerHTML = "This is the 3rd function but supposed to only excute after 5 seconds";
    
}