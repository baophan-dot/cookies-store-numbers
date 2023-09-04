// Function to save a number to cookies
function saveNumber() {
    const number = document.getElementById('numberInput').value;
    
    // Ensure the number is not empty
    if (number.trim() !== "") {
        saveNumberToHistory(number);
    }
}

function saveNumberToHistory(number) {
    const existingHistory = getCookie("numberHistory");
    console.log("Existing History:", existingHistory);

    const numberHistory = existingHistory ? JSON.parse(existingHistory) : [];
    console.log("Parsed History:", numberHistory);

    numberHistory.push(number);
    console.log("Updated History:", numberHistory);

    setCookie("numberHistory", JSON.stringify(numberHistory), 365);
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
