/**
 * Created by Sneha on 09/09/17.
 */
var date="09:00PM"
function formatDate(date) {
    // var d = new Date(date),
    //     month = '' + (d.getMonth() + 1),
    //     day = '' + d.getDate(),
    //     year = d.getFullYear();
    //
    // if (month.length < 2) month = '0' + month;
    // if (day.length < 2) day = '0' + day;
    //
    // return [year, month, day].join('-');
    var datesArr=date.split(':');
    var d=new Date(1970, 0, 1,datesArr[0],datesArr[1].substring(0,2), 0)
    console.log(d.getHours());
}
// console.log(formatDate(date));
formatDate(date);