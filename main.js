var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

var date = new Date("2021-01-01")
var curDate = new Date()
var diffDate = (date-curDate) / 1000
var d = Math.floor(diffDate / (3600*24));
var h = Math.floor(diffDate % (3600*24) / 3600);
var m = Math.floor(diffDate % 3600 / 60);
var s = Math.floor(diffDate % 60);

s = addZero(s)
m = addZero(m)
h = addZero(h)
days.innerHTML= d
hours.innerHTML = h
minutes.innerHTML = m
seconds.innerHTML = s
function addZero(x){
    return (x+"").length < 2 ? '0'+x : x
}
var countdown = setInterval(function(){
    if(s <= 1){
        s = 60
        if(m <= 1){
            m = 60
            if(h <= 1){
                h = 12
                d -= 1
            }else{
                h -= 1
            }
        }else{
            m -= 1
        }
    }else{
        s -= 1
    }
    s = addZero(s)
    m = addZero(m)
    h = addZero(h)
    days.innerHTM= d
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
},1000)
