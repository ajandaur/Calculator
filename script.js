function calculator() {
  let perviousText = document.querySelector(".prevItem");
  let currentText = document.querySelector(".currItem");
  const NumButtons = Array.from(document.querySelectorAll(".number"));
  const OperationsButton = Array.from(document.querySelectorAll(".operation"));
  const deleteButton = document.querySelector(".delete");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equals");
  let currentOperand = "";
  let previousOperand = "";
  let operation = undefined;

  function handleButtons() {
    NumButtons.map((button) => {
      button.addEventListener("click", () => {
        currentOperand === "You Can't divide by 0 buddy!" ? (currentOperand = "") : "";
        currentOperand === 0 ? (currentOperand = " ") : "";
        currentOperand = currentOperand.toString();
        if (button.textContent === "." && currentOperand.includes(".")) return;
        currentOperand += button.textContent.toString();
        updateDisplay();
      });
    });

    OperationsButton.map((button) => {
      button.addEventListener("click", () => {
        if (currentOperand === "") return;
        operation = button.textContent;
        operate();
        updateDisplay();
      });
    });

    deleteButton.addEventListener("click", () => {
      let temp;
      if (currentOperand === "You Can't divide by 0") {
        currentOperand = 0;
        temp = currentOperand;
      } else {
        temp = currentOperand.toString().slice(0, -1);
      }
      if (temp === "" || temp === 0) {
        temp = 0;
        currentOperand = temp;
        updateDisplay();
      } else {
        currentOperand = parseFloat(temp);
        updateDisplay();
      }
    });

    equalButton.addEventListener("click", () => {
      calculateResults();
      updateDisplay();
    });

    clearButton.addEventListener("click", () => {
      currentOperand = 0;
      previousOperand = "";
      operation = undefined;
      updateDisplay();
    });

    //adding a keyboard support
    window.addEventListener("keyup", (e) => {
      NumButtons.map((button) => {
        if (e.key === button.textContent) {
          if (e.key === "." && currentOperand.includes(".")) return;
          currentOperand += button.textContent.toString();
          updateDisplay();
        }
      });

      OperationsButton.map((button) => {
        if (e.key === button.textContent) {
          operation = button.textContent;
          operate();
          updateDisplay();
        }
      });

      if (e.key === equalButton.textContent) {
        calculateResults();
        updateDisplay();
      }
    });
  }

  function operate() {
    if (currentOperand === " ") return;
    if (previousOperand !== " ") {
      calculateResults();
    }
    previousOperand = `${currentOperand} ${operation}`;
    currentOperand = " ";
  }

  function calculateResults() {
    /* CONVERT FROM STRING TO FLOAT */
    const curr = parseFloat(currentOperand);
    const prev = parseFloat(previousOperand);
    let results;

    /* OPERATOR */
    if (isNaN(prev) || isNaN(curr)) return ;
    operation === "+"
      ? (results = add(prev, curr))
      : operation === "-"
      ? (results = subtract(prev, curr))
      : operation === "*"
      ? (results = multiply(prev, curr))
      : operation === "÷" && curr === 0
      ? (results = "You Can't divide by 0")
      : operation === "÷"
      ? (results = divide(prev, curr))
      : "";
    currentOperand = results;
    operation = undefined;
    previousOperand = "";
  }

  function updateDisplay() {
    currentText.textContent = currentOperand;
    perviousText.textContent = previousOperand;
  }

  handleButtons();
}

/* CALL FUNCTIONS */
calculator();

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

