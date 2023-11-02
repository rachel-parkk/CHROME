// content.js

// Function to extract the current page's URL and send it to the background script
function extractAndSendURL() {
    const currentURL = window.location.href;
  
    // Send the URL to the background script
    chrome.runtime.sendMessage({ action: 'addWebsite', url: currentURL });
  }
  
  // Call the extraction function when the page loads
  extractAndSendURL();
  