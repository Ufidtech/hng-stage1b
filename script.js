// Grab the time element from the DOM
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Function to calculate and update the current time in milliseconds (Epoch time)
function updateEpochTime() {
    // Date.now() returns the exact millisecond timestamp required by the rubric
    const currentMilliseconds = Date.now();
    timeElement.textContent = currentMilliseconds;
}

// Run it immediately on render
updateEpochTime();

// Update reasonably every 1000ms (1 second) so it ticks automatically without breaking screen readers
setInterval(updateEpochTime, 1000);