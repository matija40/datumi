var days = ["(Nedjelja)", "(Ponedjeljak)", "(Utorak)", "(Srijeda)", "(Četvrtak)", "(Petak)", "(Subota)S"]
var start = new Date('3/31/2021');
var end = new Date('10/19/2021');
var today = new Date();
var danas = today;
var ms = 1000 * 3600 * 24;
function rac(x, y) {
    var rac = x.getTime() - y.getTime();
    var res = rac / ms;
    var zaokruzi = Math.floor(res);
    return zaokruzi;
}

function day(x) {
    var da = x.getDay();
    return da;
}
function dayOfweek(x) {
    var year = x.getFullYear();
    var mon = x.getMonth() + 1;
    var dan = x.getDate();
    var datum = dan + "." + mon + "." + year
    return datum;
}
console.log("Dana", dayOfweek(start), days[day(start)], "počela je nastava za obrazovni program Front-end developer. Zadnje predavanje održati će se", dayOfweek(end), days[day(end)]);
console.log("Od početka nastave prošlo je", rac(today, start), "dana, a do kraja je preostalo", rac(end, today), "dana.");