const moment = require("moment");
console.log(moment().format("dddd, MMMM Do YYYY"));
moment("20111031", "YYYYMMDD").fromNow();

console.log(moment("19761126", "YYYYMMDD").fromNow());
