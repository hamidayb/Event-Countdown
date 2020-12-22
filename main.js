var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

const date = new Date("01 Jan 2021")
const curDate = new Date()
const totalSeconds = (date-curDate) / 1000
var d = Math.floor(totalSeconds / (3600*24));
var h = Math.floor((totalSeconds / 3600) % 24);
var m = Math.floor((totalSeconds / 60) % 60);
var s = Math.floor(totalSeconds % 60);

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

const body = document.getElementById("body")
console.log(window.getComputedStyle(body))
