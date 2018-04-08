var minutes;
var seconds;
var newInterval;

function timer() {
  seconds--;
  $("#gameTime").text(minutes + ':' + seconds);
  if (seconds == -1) {
    minutes -= 1;
    seconds = 59;
  }
  if (minutes < 10) {
    $("#gameTime").text('0' + minutes + ':' + seconds);
  }
  if (seconds < 10) {
    $("#gameTime").text(minutes + ':' + '0' + seconds);
  }
  if ((minutes < 10) && (seconds < 10)) {
    $("#gameTime").text('0' + minutes + ':' + '0' + seconds);
  }
}

function pauseTimer() {
  clearInterval(newInterval);
  playing = false;
}

function resumeTimer() {
  newInterval = setInterval(timer, 1000);
  playing = true;
}

function startTimer() {
  playing = true;
  minutes = 5;
  seconds = 0;
  newInterval = setInterval(timer, 1000);
}
