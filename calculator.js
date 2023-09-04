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

