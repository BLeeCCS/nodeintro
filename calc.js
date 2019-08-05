function doMath(operator,num1,num2) {
  switch(operator) {
    case '+':
      var result = num1 + num2;
      break;
    case '-':
      var result = num1 - num2;
      break;
    case '*':
      var result = num1 * num2;
      break;
    case '/':
      var result = num1 / num2;
      break;
    default:
      break;
  }
  return result;
}

var op = process.argv[3];

var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);

console.log(doMath(op,num1,num2));
console.log(process.argv);

