/**
 * Created by Sneha on 20/07/17.
 */

var starttime = "06:00"
var interval = "60";
var endtime = "22:00";

var hour=60;

function getTimeSlots(startTime,endTime,interval) {
    var startTimeArray=startTime.split(":");
    var endTimeArray=endTime.split(":");
    var completeTimeSlots=[];
    var duration=((endTimeArray[0]-startTimeArray[0])*hour);
    duration=duration-Number(startTimeArray[1]);
    duration=duration+Number(endTimeArray[1]);

    if(duration>=interval){
        var timeslots = [startTime];
        var time=duration/interval;
        var i=0;
        var currentHours=startTimeArray[0];
        var currentMinutes=startTimeArray[1];
        var diffMinutes=0
        // if(interval>=hour){
        //     diffMinutes=interval%hour;
        // }else{
        //     diffMinutes=interval;
        // }
        var diffMinutes=interval%hour;
        while(i<=(time-1)){
            var hours=Math.floor(interval/hour);
            hours=Number(currentHours)+Number(hours);
            minutes=Number(currentMinutes)+Number(diffMinutes);
            if(minutes>=hour){
                hours=Number(hours)+1;
                minutes=Number(minutes)%hour;
            }
            if(hours<10){
                hours="0"+hours;
            }
            if(minutes<10){
                minutes="0"+minutes;
            }
            var timeslot=String(hours)+":"+String(minutes);
            timeslots.push(timeslot);
            currentHours=Number(hours);
            currentMinutes=Number(minutes);
            i=i+1;
        }
        if(duration%interval!=0){
            timeslots.push(endTime);
        }
        var j=0;
        for(j=0;j<timeslots.length-1;j++)
        {
         completeTimeSlots.push(timeslots[j]+"-"+timeslots[j+1]);
        }
        console.log(completeTimeSlots);
    }else{
        console.log("Duration should be greater than interval");
    }
}

getTimeSlots(starttime,endtime,interval);
