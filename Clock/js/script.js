const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.min');
const secondHand = document.querySelector('.sec');

function setDate() {
  //const for getting time
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  //const for setting degrees
  const hoursDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
  const minutesDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
  const secondsDegrees = ((second / 60) * 360) + 90;

  //moving hands of the clock
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
