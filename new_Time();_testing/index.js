let date, liveTime;

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
}

function getfunctions(){
    date = new Date();
    document.getElementById("getYear").innerHTML = "The Year: "+date.getFullYear();
    document.getElementById("getMonth").innerHTML = "Month: " +(date.getMonth()+1)+" - "+MonthConvert((date.getMonth()+1));
    document.getElementById("getDate").innerHTML = "Date: "+(date.getDate())+DateTag(date.getDate());
    document.getElementById("getDay").innerHTML = "Day: "+(date.getDay()+1)+ " - "+DayConvert(date.getDay()+1);
    document.getElementById("getHour").innerHTML = "Hour: "+AmOrPm(date.getHours());
    document.getElementById("getMinute").innerHTML = "Minute: "+(date.getMinutes());
    document.getElementById("getSecond").innerHTML = "Seconds: "+(date.getSeconds());
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
            T_hour = (hour%12) + " Pm";
        }
        else
        {
            T_hour = hour + " Am";
        }
        return T_hour;
    }