const websiteInput = document.getElementById('website-input');
const addButton = document.getElementById('add-button');
const websiteList = document.getElementById('website-list');

addButton.addEventListener('click', function () {
  const inputValue = websiteInput.value;

  // Parse the input to extract the domain
  const domain = parseDomain(inputValue);

  if (domain) {
    // Create a list item and add the domain
    const listItem = document.createElement('li');
    listItem.textContent = domain;
    websiteList.appendChild(listItem);

    // Clear the input field
    websiteInput.value = '';
  }
});

function parseDomain(input) {
  const domainRegex = /(?:https?:\/\/)?(?:www\.)?([^/]+)(?:\/|$)/i;
  const match = input.match(domainRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    alert('Invalid website URL. Please enter a valid URL.');
    return null;
  }
}
