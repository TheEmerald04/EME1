const display = document.getElementById('display');
const buttons = document.querySelectorAll('btn');

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
          expression = '';
        } else if (value === '⌫') {
          try {
              expression = expression.replace(/\^/g, '**');
              display.textContent = eval(expression);
              expression = display.textContent;
              return;
          } catch (err) {
            display.textContent = 'Error';
            expression = '';  
            return;
         }
      } else { 
        expression += value;
      }      
        display.textContent = expression
    });
});
