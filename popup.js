const timeInput = document.getElementById('time-input');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
  const timeValue = timeInput.value;
  if (validateTimeInput(timeValue)) {
    // Disable the input field
    timeInput.disabled = true;

    // Parse the time input into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeValue.split(':').map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Function to update the countdown
    function updateCountdown() {
      const hoursRemaining = Math.floor(totalSeconds / 3600);
      const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
      const secondsRemaining = totalSeconds % 60;

      // Display the countdown in the input field
      timeInput.value = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;

      // Check if the countdown has reached zero
      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        alert('Countdown has finished!');
      } else {
        totalSeconds--;
      }
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
  } else {
    alert('Invalid time format. Please use hh:mm:ss format.');
  }
});

function validateTimeInput(input) {
  const timePattern = /^(\d{2}):(\d{2}):(\d{2})$/;
  return timePattern.test(input);
}
