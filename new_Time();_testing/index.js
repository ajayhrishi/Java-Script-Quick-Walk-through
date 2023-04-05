let date, liveTime, saveddate1;

setInterval(livetime, 1000);
function livetime(){
    let Displaytime = new Date;
    Displaytime = "Time now: <br>"+Displaytime;
    document.getElementById("Live_time").innerHTML= Displaytime;
    Displaytime = new Date;
}


document.getElementById("Date_now").onclick = function(){
    date = new Date();
    document.getElementById("resultDate_now").innerHTML =  "Captured: " +date;
    getfunctions();
    document.getElementById("Better_Format").innerHTML = BetterTimeFrmt(date);
}


const updatedresult = document.getElementById("UpdatedTime");
document.getElementById("StartEdit").onclick = function(){
    saveddate1 = date;
    updatedresult.innerHTML = saveddate1;
    saveddate1 = date;
    document.getElementById("SavedTime").innerHTML = "Saved";
}


function getfunctions(){  // custom made function for getting each elements in order. 
    date = new Date();
    document.getElementById("getYear").innerHTML = "The Year: "+date.getFullYear();
    document.getElementById("getMonth").innerHTML = "Month: " +Add0ToTime((date.getMonth()+1))+" - "+MonthConvert((date.getMonth()+1));
    document.getElementById("getDate").innerHTML = "Date: "+(date.getDate())+DateTag(date.getDate());
    document.getElementById("getDay").innerHTML = "Day: "+Add0ToTime((date.getDay()+1))+ " - "+DayConvert(date.getDay()+1);
    document.getElementById("getHour").innerHTML = "Hour: "+Add0ToTime(HourTo12(date.getHours()));
    document.getElementById("getAmOrPm").innerHTML = "Am or PM: "+AmOrPm(date.getHours());
    document.getElementById("getMinute").innerHTML = "Minute: "+Add0ToTime((date.getMinutes()));
    document.getElementById("getSecond").innerHTML = "Seconds: "+Add0ToTime((date.getSeconds()));

}

function BetterTimeFrmt(time){ // custom made function for giving a better output for Time
    let betterTime = Add0ToTime(HourTo12(time.getHours()))+":"+Add0ToTime((time.getMinutes()))+":"+Add0ToTime((time.getSeconds()))+AmOrPm(time.getHours())
    +" - "+DayConvert(time.getDay()+1) +"<br>" +Add0ToTime( MonthConvert((time.getMonth()+1)))+" "+(time.getDate())+DateTag(time.getDate())
    +", "+time.getFullYear();
    return betterTime;
}


/*------------------------------ Converting functions --------------------------------*/
function MonthConvert(MConvert)
{
 let month;
 switch(MConvert){
   case 1 : month = "January";
   break;
   case 2 : month = "February";
   break;
   case 3 : month = "March";
   break;
   case 4 : month = "April";
   break;
   case 5 : month = "May";
   break;
   case 6 : month = "June";
   break;
   case 7 : month = "July";
   break;
   case 8 : month = "August";
   break;
   case 9 : month = "September";
   break;
   case 10 : month = "October";
   break;
   case 11 : month = "November";
   break;
   case 12 : month = "December";
   break;
   default: 
      month = "NaN";
 }

  return month;
}
/*-------This function is to get the 'rd' or 'th' tag based on the date we have---------*/

 function DateTag(date){
    let tagvalue;
   if (date>9)
   {
    tagvalue  = tagvaluefetch((date%10));
   }
   else
   {
    tagvalue  =  tagvaluefetch(date);
   }
   return tagvalue;

 }

function tagvaluefetch(date){
    let r;
    switch(date)
    {
       case 1 : r = "st";
                break;
       case 2 : r = "nd";
                break;
       case 3 : r = "3rd";
                break;
       default:
        r ="th";
    }
    return r;
   }
   /*-------This section is to convert the day to string---------*/
function DayConvert(DConvert)
   {
    let Day;
     switch(DConvert)
     {
        case 1 :  Day= "Sunday";
        break;
        case 2 : Day= "Monday";
        break;
        case 3 : Day= "Tuesday";
        break;
        case 4 : Day= "Wednesday";
        break;
        case 5 : Day= "Thursday";
        break;
        case 6 : Day= "Friday";
        break;
        case 7 : Day= "Saturday";
        break;
        default : Day= "NaN";

     }
    return Day;
   }

    /*-------This section is to find the AM or PM tag for the hour---------*/

function AmOrPm(hour){
        let T_hour;
        if(hour>12)
        {
            T_hour = " Pm";
        }
        else
        {
            T_hour = " Am";
        }
        return T_hour;}
function HourTo12(hour)
    {   let Hour12;
        if(hour>12)
        {
            Hour12 = (hour%12);
        }
        else
        {
            Hour12=hour;
        }
        return Hour12;

    }
function Add0ToTime(singledigit){
        let digit = singledigit.toString();
        if(digit.length<2)
        digit = "0"+digit;
        return digit;
    }

    /* ---------------- Edit time functions ---------------------------*/

document.getElementById("gettheYear").onclick = function ()
{
    let a = document.getElementById("SetupYear").value;
    saveddate1.setFullYear(a);
    updatedresult.innerHTML = saveddate1;

}

/* ------
document.getElementById("getMonth").onclick = function ()
{
    let a = document.getElementById("SetMonth").value;
    saveddate1.setMonth(a);
    let b = saveddate1.toString();
    updatedresult.innerHTML = b;
}

document.getElementById("getDate").onclick = function ()
{
    let a = document.getElementById("SetDate").value;
    let b = saveddate1.toString();
    updatedresult.innerHTML = b;
}

document.getElementById("getDay").onclick = function ()
{
    let a = document.getElementById("SetDay").value;
    let b = saveddate1.toString();
    updatedresult.innerHTML = b;
}


document.getElementById("getHour").onclick = function ()
{
    let a = document.getElementById("SetHour").value;
    let b = saveddate1.toString();
    updatedresult.innerHTML = b;
}

document.getElementById("getMinute").onclick = function ()
{
    let a = document.getElementById("SetMinute").value;
    let b = saveddate1.toString();
    updatedresult.innerHTML = b;
}

document.getElementById("getSecond").onclick = function ()
{
    let a = document.getElementById("SetSecond").value;
    let b = saveddate1.toString();
    updatedresult.innerHTML = b;
}---------*/