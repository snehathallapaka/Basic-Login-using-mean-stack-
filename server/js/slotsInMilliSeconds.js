/**
 * Created by Sneha on 11/08/17.
 */
var date = require('date-and-time');
var starttime = "2017/08/12 09:30";
var lunchStartTime="2017/08/12 12:00";
var lunchEndTime="2017/08/12 12:30";
var interval = "90";
var endtime = "2017/08/12 18:00";

var hour=60;
function getTimeSlots(startTime,lunchStartTime,lunchEndTime,endTime,interval) {
    var completeTimeSlots=[];
    var startDate=date.parse(startTime, 'YYYY/MM/DD HH:mm');
    var endDate=date.parse(lunchStartTime,'YYYY/MM/DD HH:mm');
    var duration=((endDate.getHours()-startDate.getHours())*hour);
    duration=duration-Number(startDate.getMinutes());
    duration=duration+Number(endDate.getMinutes());
    completeTimeSlots=getSlots(duration,interval,startDate,lunchStartTime);
    startDate=date.parse(lunchEndTime, 'YYYY/MM/DD HH:mm');
    endDate=date.parse(endTime,'YYYY/MM/DD HH:mm');
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
    timeslots.push(startDate.getTime());
    if(duration>=interval){
        var time=duration/interval;
        var i=0;
        while(i<=(time-1)){
            startDate=date.addMinutes(startDate,interval);
            // timeslots.push(padding(startDate.getHours())+":"+padding(startDate.getMinutes()));
            timeslots.push(startDate.getTime());
            i=i+1;
        }
        if(duration%interval!=0){
            endDate=date.parse(endTime,'YYYY/MM/DD HH:mm');
            timeslots.push(endDate.getTime());
        }
        var j=0;
        for(j=0;j<timeslots.length-1;j++) {
            completeTimeSlots.push(timeslots[j]);
        }
        return completeTimeSlots;
    }
}

getTimeSlots(starttime,lunchStartTime,lunchEndTime,endtime,interval);
