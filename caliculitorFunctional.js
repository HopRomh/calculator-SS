let firstNumber = null; // Первое число для операции
let lastNumber = null; // Второе число для операции
let currentNumber = ''; // Текущее введенное число
let operator = null; // Знак операции

function addNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('inputField').value = currentNumber;
}

function setOperator(op) {
    if (currentNumber !== '') {
        firstNumber = parseFloat(currentNumber);
        operator = op;
        currentNumber = '';
    }
}

function calculate() {
    if (currentNumber !== '') {
        lastNumber = parseFloat(currentNumber);
        let result;
        switch (operator) {
            case '+':
                result = firstNumber + lastNumber;
                break;
            case '-':
                result = firstNumber - lastNumber;
                break;
            case '÷':
                result = firstNumber / lastNumber;
                break;
            case '×':
                result = firstNumber * lastNumber;
                break;
            default:
                return;
        }
        document.getElementById('inputField').value = result;
        currentNumber = result.toString();
    }
}

function clearDisplay() {
    currentNumber = '';
    firstNumber = null;
    lastNumber = null;
    operator = null;
    updateDisplay();
}



