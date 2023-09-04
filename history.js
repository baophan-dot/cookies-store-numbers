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

// Function to set a cookie with a specified name, value, and expiration (in days)
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Call populateNumberHistory when the history page loads
populateNumberHistory();
