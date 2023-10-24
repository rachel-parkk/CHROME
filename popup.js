// Get the input field and start button
const timeInput = document.getElementById('time-input');
const startButton = document.getElementById('start-button');

// Event listener for the "start" button
startButton.addEventListener('click', function () {
  const timeValue = timeInput.value;
  if (validateTimeInput(timeValue)) {
    // You can use the timeValue for your timer functionality
    // For now, let's display an alert with the entered time
    alert(`Starting timer for ${timeValue}`);
  } else {
    alert('Invalid time format. Please use hh:mm:ss format.');
  }
});

// Function to validate time input
function validateTimeInput(input) {
  // Simple regex to check if the input matches the format hh:mm:ss
  const timePattern = /^(\d{2}):(\d{2}):(\d{2})$/;
  return timePattern.test(input);
}
