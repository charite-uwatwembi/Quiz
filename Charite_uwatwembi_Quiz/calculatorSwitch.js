function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
    return result;
  }
  
  const num1 = 20;
  const num2 = 20;
  const operator = '+';
  
  const result = calculate(num1, num2, operator);
  console.log('The result is: ' + result);