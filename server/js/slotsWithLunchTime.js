/**
 * Created by Sneha on 03/08/17.
 */

var date = require('date-and-time');
var starttime = "09:30";
var lunchStartTime="12:00";
var lunchEndTime="12:30";
var interval = "90";
var endtime = "18:00";

var hour=60;
function getTimeSlots(startTime,lunchStartTime,lunchEndTime,endTime,interval) {
    var completeTimeSlots=[];
    var startDate=date.parse(startTime, 'HH:mm');
    var endDate=date.parse(lunchStartTime,'HH:mm');
    var duration=((endDate.getHours()-startDate.getHours())*hour);
    duration=duration-Number(startDate.getMinutes());
    duration=duration+Number(endDate.getMinutes());
    completeTimeSlots=getSlots(duration,interval,startDate,lunchStartTime);
    startDate=date.parse(lunchEndTime, 'HH:mm');
    endDate=date.parse(endTime,'HH:mm');
    duration=((endDate.getHours()-startDate.getHours())*hour);
    duration=duration-Number(startDate.getMinutes());
    duration=duration+Number(endDate.getMinutes());
    var temp=getSlots(duration,interval,startDate,endTime);
    console.log(completeTimeSlots.concat(temp));
}

function padding(time) {
    if(time<10){
        return "0"+time;
    }else{
        return time;
    }
}

function getSlots(duration,interval,startDate,endTime) {
    var timeslots=[];
    var completeTimeSlots=[];
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
        return completeTimeSlots;
    }
}

getTimeSlots(starttime,lunchStartTime,lunchEndTime,endtime,interval);
