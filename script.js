// Initialize an empty string to store the number
let expression = '';

// Function to add the button that is clicked on the screen//
function appendToScreen(value) {
    // Add the clicked button value to the expression
    expression += value;
    // Show the updated text on the calculator screen by putting .innertext will equal the number/problems or expressions that is put in
    document.getElementById('screen').innerText = expression;
}

// Function to clear the calculator screen and reset the expression
function clearScreen() {
    // Reset the expression to an empty string
    expression = '';
    // Show '0' on the calculator screen
    document.getElementById('screen').innerText = '0';
}

// Function to calculate the expression and show the result or error message on the screen
function calculate() {
    try {
        // Evaluate the expression and get the result
        const result = eval(expression);
        // Convert the result to a string and update the expression
        expression = result.toString();
        // Show the result on the calculator screen
        document.getElementById('screen').innerText = expression;
    } catch (error) {
        // If an error occurs during the process, screen will show error on the calculator screen
        // Reset the expression to start over
        expression = '';
        // Show 'Error' on the calculator screen
        document.getElementById('screen').innerText = 'Error';
    }
}

