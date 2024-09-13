// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

let countdownInterval;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          alert("Please choose a date in the future");
          startButton.disabled = true;
      } else {
          userSelectedDate = selectedDates[0];
          startButton.disabled = false;
      }
  },
};

flatpickr("datetime-picker", options)

startButton.addEventListener('click', () => {
  startButton.disabled = true ;
  document.getElementById('datetime-picker').disabled = true ;

  startCountdown() ;
}) ;

function startCountdown() {
  countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const timeDiff = userSelectedDate - currentTime ;

    if (timeDiff < 0) {
      clearInterval(countdownInterval)
      alert("Countdown finished! ✅")
      startButton.disabled = true ;
      updateTimerDisplay(0, 0, 0, 0);
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDiff);
      updateTimerDisplay(days, hours, minutes, seconds);
    }
  })
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay (days, hours, minutes, seconds) {
  daysSpan.textContent = addZero(days) ;
  hoursSpan.textContent = addZero(hours) ;
  minutesSpan.textContent = addZero(minutes) ;
  secondsSpan.textContent = addZero(seconds) ;
}


function addZero(value) {
return String(value).padStart(2, '0') ;
}