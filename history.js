// Function to populate number history from cookies when the page loads
function populateNumberHistory() {
    const numberList = document.getElementById('numberList');
    const numberHistory = JSON.parse(getCookie("numberHistory")) || [];

    // Populate the number history list
    for (const number of numberHistory) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="#" onclick="showNumber(${number})">${number}</a>
        `;
        numberList.appendChild(listItem);
    }
}

// Function to display a number when clicked
function showNumber(number) {
    alert("Clicked Number: " + number);
}

// Function to clear number history
function clearHistory() {
    // Clear the number history cookie
    setCookie("numberHistory", "", -1);

    // Refresh the page to reflect the cleared history
    location.reload();
}
// Call populateNumberHistory when the history page loads
populateNumberHistory();
