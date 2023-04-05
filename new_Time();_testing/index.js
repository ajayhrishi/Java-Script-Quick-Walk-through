let date, liveTime;

setInterval(livetime, 1000);
function livetime(){
    let Displaytime = new Date;
    Displaytime = "Time now: <br>"+Displaytime;
    document.getElementById("Live_time").innerHTML= Displaytime;
    Displaytime = new Date;
}


document.getElementById("Date_now").onclick = function(){
    let date = new Date();
    let timenow = "Captured: " +date.toLocaleString(); 
    document.getElementById("resultDate_now").innerHTML = timenow;
    date = new Date();

}