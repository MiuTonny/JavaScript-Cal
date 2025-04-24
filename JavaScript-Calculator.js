// Simple Calculator

// History array to store calculation
let history = [];

// Calculator functions (+,-,*,/)

function add(a, b) {
    const result = a + b; // Calculate the result
    history.push({ operands: [a, b], operator: '+', result: result });
    console.log(history); // Log the history after calculation
    return result; // Return the result
}

function subtract(a, b) {
    const result = a - b; 
    history.push({ operands: [a, b], operator: '-', result: result });
    console.log(history); 
    return result; 
}

function multiplication(a, b) {
    const result = a * b; 
    history.push({ operands: [a, b], operator: '*', result: result });
    console.log(history); 
    return result; 
}

function division(a, b) {
    if (b === 0) {
        history.push({ operands: [a, b], operator: '/', result: 'Error: Division by zero' });
        console.log(history); // Log the history with error message
        return 'Error: Division by zero'; // Return error message
    }
    const result = a / b; 
    history.push({ operands: [a, b], operator: '/', result: result });
    console.log(history); 
    return result; 
}

//Function to display the calculation history/inform they have no stored calculations
function displayHistory() {
    if (history.length === 0) {
        console.log("No stored calculations yet.");
    } else {
        console.log("Calculation History:");
        history.forEach((entry, index) => {
            const [a, b] = entry.operands;
            console.log(
                `${index + 1}. ${a} ${entry.operator} ${b} = ${entry.result}`
            );
        });
    }
}


















