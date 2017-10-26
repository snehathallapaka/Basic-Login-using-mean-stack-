/**
 * Created by Sneha on 20/07/17.
 */


var date = require('date-and-time');
var starttime = "06:00";
var interval = "90";
var endtime = "07:00";

var hour=60;
function getTimeSlots(startTime,endTime,interval) {
    var timeslots=[];
    var completeTimeSlots=[];
    var startDate=date.parse(startTime, 'HH:mm');
    var endDate=date.parse(endTime,'HH:mm');
    var duration=((endDate.getHours()-startDate.getHours())*hour);
    duration=duration-Number(startDate.getMinutes());
    duration=duration+Number(endDate.getMinutes());
    timeslots.push(padding(startDate.getHours())+":"+padding(startDate.getMinutes()));
    if(duration>=interval){
        var time=duration/interval;
        var i=0;
        while(i<=(time-1)){
            startDate=date.addMinutes(startDate,interval);
            timeslots.push(padding(startDate.getHours())+":"+padding(startDate.getMinutes()));
            i=i+1;
        }
        if(duration%interval!=0){
            timeslots.push(endTime);
        }
        var j=0;
        for(j=0;j<timeslots.length-1;j++) {
            completeTimeSlots.push(timeslots[j]+"-"+timeslots[j+1]);
        }
        console.log(completeTimeSlots);
    }else{

    }

}

function padding(time) {
    if(time<10){
        return "0"+time;
    }else{
        return time;
    }
}

getTimeSlots(starttime,endtime,interval);
