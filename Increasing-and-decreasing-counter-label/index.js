
let count = 0;


let intervalId;  // Variable for keeping the button working by pressing and holding it. 

document.getElementById("increase").addEventListener("mousedown", function() {
    intervalId = setInterval(function() {  //mousedown is the keywork helping to keep excute the button while clicking and holding it. 
        count += 1;                         //setInterval is the keywork helping to keep excute the button based on the time we set in milli seconds. 
        document.getElementById("A1").innerHTML = count;
    }, 60); // update the count every 100 milliseconds
});

document.getElementById("increase").addEventListener("mouseup", function() {
    clearInterval(intervalId); // stop updating the count when the mouse button is released. In otherwords to stop executing the setinterval keywork used before
});
// syntax document.getElementById("decrease").addEventListener("mousdown", function() {function content} );

document.getElementById("decrease").addEventListener("mousedown", function() {
    intervalId= setInterval(function() 
    
    {
    count-=1;
    document.getElementById("A1").innerHTML=count;
    }, 60);

});

document.getElementById("decrease").addEventListener("mouseup", function() {
    clearInterval(intervalId);

});
            /*
document.getElementById("decrease").onclick= function(){

    count -=1;
    document.getElementById("A1").innerHTML = count;
    
}
          */


document.getElementById("clear").onclick= function(){

    count =0;
    document.getElementById("A1").innerHTML = count;
    
}