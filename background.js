// background.js

// Initialize the website list with an empty array
let websiteList = [];

// Listen for messages from content.js and popup.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'addWebsite' && message.url) {
    // Handle adding a website to the list
    addWebsiteToList(message.url);
  } else if (message.action === 'getWebsiteList') {
    // Send the website list to the popup.js
    sendResponse(websiteList);
  }
});

// Function to add a website to the list
function addWebsiteToList(url) {
  // Add the URL to the list if it's not already present
  if (!websiteList.includes(url)) {
    websiteList.push(url);
    // You may want to save the updated list to storage here for persistence
    // For simplicity, we're not doing that in this example
  }
}
