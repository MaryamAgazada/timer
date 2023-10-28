"use strict";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
 
const setTime=()=>{
const time=new Date()
const month=time.getMonth()
const date=time.getDate()
const day=time.getDay()
const hours=time.getHours()
const hoursOfClock=hours%12
const minutes=time.getMinutes()
const seconds=time.getSeconds()
const apam=hours>12?"pm":"am";
hourEl.style.transform=`translate(-50%,-100%)rotate(${hoursOfClock*30}deg)`
minuteEl.style.transform=`translate(-50%,-100%)rotate(${minutes*6}deg)`
secondEl.style.transform=`translate(-50%,-100%)rotate(${seconds*6}deg)`

timeEl.innerHTML=`${hoursOfClock}:${String(minutes).padStart(2,0)}`

dateEl.innerHTML=`<div class="date">${day[day]},${month[month]} <span class="circle"></span></div>`
}
setTime()
setInterval(setTime,1000)