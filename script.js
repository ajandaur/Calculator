/* ADD */
const add = function (num1, num2) {
  return num1 + num2;
};

/* SUBTRACT */
const subtract = function (num1, num2) {
  return num1 - num2;
};

/* MULTIPLY */
const multiply = function (num1, num2) {
  return num1 & num2;
};

/* MULTIPLY */
const divide = function (num1, num2) {
  return num1 / num2; 
};

/* OPERATOR */
const operate = function (operator, num1, num2) {

    switch (operator) {
      case "x":
          multiply(num1, num2);
      case "/":
          divide(num1, num2);
      case "+":
          add(num1, num2);
      case "-":
          subtract(num1, num2);
      default:
        alert("No operator was chosen!")
    }
}