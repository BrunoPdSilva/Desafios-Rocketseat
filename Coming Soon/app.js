const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function countdown() {
  const launchDate = new Date("2023 01 01").getTime();
  const currentDate = new Date().getTime();

  const gap = launchDate - currentDate;

  const seconds = 1000;
  const minutes = 60 * seconds;
  const hours = 60 * minutes;
  const days = 24 * hours;

  const textDay = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  daysElement.innerText = formatTime(textDay);
  hoursElement.innerText = formatTime(textHours);
  minutesElement.innerText = formatTime(textMinutes);
  secondsElement.innerText = formatTime(textSeconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

setInterval(countdown, 1000);
