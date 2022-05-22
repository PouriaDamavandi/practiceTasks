window.initializeClock = function (clockId, dateId) {
  let getTimeRemaining = function (endtime) {
    if (Date.parse(endtime) < new Date().getTime()) {
      document.getElementById("clockDiv").innerHTML = "EXPIRED";
      return;
    }
    let t = Date.parse(endtime) - new Date().getTime();
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  let clock = document.getElementById(clockId);
  let deadline = document.getElementById(dateId).value;
  let timeinterval = setInterval(function () {
    let t = getTimeRemaining(deadline);
    clock.innerHTML =
      "days: " +
      t.days +
      " " +
      "hours: " +
      t.hours +
      " " +
      "minutes: " +
      t.minutes +
      " " +
      "seconds: " +
      t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
};
