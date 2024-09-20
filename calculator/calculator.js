document.getElementById('calculateBtn').addEventListener('click', function() {

    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const operation = document.getElementById('operation').value;
    const resultDisplay = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (isNaN(num1) || isNaN(num2)) {
        errorMessage.textContent = 'Please enter valid number.';
        resultDisplay.textContent = '0';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                errorMessage.textContent = 'Cannot divide by zero.';
                resultDisplay.textContent = '0';
                return;
            }
            result = number1 / number2;
            break;
        default:
            errorMessage.textContent = 'Invalid operation selected.';
            resultDisplay.textContent = '0';
            return;
    }

    resultDisplay.textContent = result;
});
