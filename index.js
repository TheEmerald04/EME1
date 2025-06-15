const display = document.getElementById('display');
const buttons = document.querySelectorAll('btn');

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
          calculate();
        } else if (value === '⌫') {
          display.textContent = display.textContent.slice(0, -1);
        } else {
          display.textContent += convertToJSOperator(value);  
        }
    });
});

function convertToJSOperator(symbol) {
    switch (symbol) {
        case 'x': return '*';
        case '÷': return '/';
        case '-': return '-';
        case '+': return '+';
        case '^': return '**';
        default: return symbol;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
      display.textContent = 'Error';
    }
}