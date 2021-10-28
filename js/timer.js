var countDownDate = new Date("Oct 30, 2021 9:00:00").getTime();
var Today = new Date().getTime();

var distance = countDownDate - Today;

var hour = Math.floor(distance / (1000 * 60 * 60));
var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var second = Math.floor((distance % (1000 * 60)) / 1000);


var hour1 = document.getElementById("hour1");
var hour2 = document.getElementById("hour2");
var min1 = document.getElementById("min1");
var min2 = document.getElementById("min2");
var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");

// Update the count down every 1 second
var x = setInterval(function () {
  second--;
  if (second < 0) {
    minute--;
    second = 59;
  }
  if (minute < 0) {
    hour--;
    minute = 59;
  }
  if (hour < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's up!";
  }

  hour1.innerHTML = (hour - (hour % 10)) / 10;
  hour2.innerHTML = hour % 10;
  min1.innerHTML = (minute - (minute % 10)) / 10;
  min2.innerHTML = minute % 10;
  sec1.innerHTML = (second - (second % 10)) / 10;
  sec2.innerHTML = second % 10;
}, 1000);
