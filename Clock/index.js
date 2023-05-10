

let date,month,year,day;
let hour,Minute,seconds,AMorPM;
setInterval(timerline,1000);

function timerline(){
        hour = new Date().getHours();
        Minute=new Date().getMinutes();
        seconds=new Date().getSeconds();

        if(hour>12){hour=(hour%12);AMorPM="PM";}
        else if(hour=0){
            hour="12";AMorPM="AM";
        }
        else{
            hour=hour; AMorPM="AM";
        }

        hour = addzero(hour);
        Minute=addzero(Minute);
        seconds=addzero(seconds);

        dayline();
        
        document.getElementById("Time").innerHTML=`${hour}:${Minute}:${seconds} ${AMorPM}`;
        document.getElementById("Day").innerHTML = `${day}`;
        document.getElementById("Date").innerHTML = ` ${date}, ${month} ${year}`;
}

function dayline(){
 

    date=new Date().getDate();
    date=addzero(date);
    date=daytag(date);

    month=new Date().getMonth();
    month=Monthchecker(month);
    year=new Date().getFullYear();

    day=new Date().getDay();
    day=Daychecker(day);

    
}
function addzero(number){
            return (number<10)?`0${number}`:number;
}
function Daychecker(day){
    switch(day){
        case 0: day="Sunday";
        break;
        case 1: day="Monday";
           break;
           case 2: day="Tuesday";
           break;
           case 3: day="Wednesday";
           break;
           case 4: day="Thursday";
           break;
           case 5: day="Friday";
           break;
           case 6: day="Saturday";
           break;

    }
    return day;
}
function Monthchecker(month)

{
    switch(month){
        case 0: month="January";
        break;
        case 1: month="February";
           break;
           case 2: month="March";
           break;
           case 3: month="April";
           break;
           case 4: month="May";
           break;
           case 5: month="June";
           break;
           case 6: month="July";
           break;
           case 7: month="August";
           break;
           case 8: month="September";
           break;
           case 9: month="October";
           break;
           case 10: month="November";
           break;
           case 11: month="December";
           break;
    }
    return month;
}
function daytag(day){
    if(day[1]==1)day=`${day}st`;
    else if(day[1]==2)day=`${day}nd`;
    else if(day[1]==3)day=`${day}rd`;
    else day=`${day}th`;
    return day;
}