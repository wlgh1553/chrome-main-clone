const clock = document.querySelector("h2#clock");

function getFormattedTime(time) {
  return String(time).padStart(2, "0");
}

function getClock() {
  const date = new Date();
  const hour = getFormattedTime(date.getHours());
  const minute = getFormattedTime(date.getMinutes());
  const second = getFormattedTime(date.getSeconds());
  clock.innerHTML = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);
