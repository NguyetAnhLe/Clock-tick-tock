let today = new Date();

let pam = today.getHours() >11 ? "PM" : "AM";
let t = 0;

if (pam === "PM"){
    t = today.getHours()-12;
}
else t = today.getHours();


var time = {
 hour : t,
 min  : today.getMinutes(),
 sec  : today.getSeconds(),
 daylight : pam
};

export default time;