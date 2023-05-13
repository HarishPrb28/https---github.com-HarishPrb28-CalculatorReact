import "./Calculator.css";
import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = () => {
    if (!num1 || !num2) {
      setErrorMessage("Please enter both numbers.");
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage("Please enter valid numbers.");
      return false;
    }
    return true;
  };

  const performOperation = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operation === "+") {
      setResult(n1 + n2);
    } else if (operation === "-") {
      setResult(n1 - n2);
    } else if (operation === "*") {
      setResult(n1 * n2);
    } else if (operation === "/") {
      if (n2 === 0) {
        setErrorMessage("Cannot divide by zero.");
      } else {
        setResult(n1 / n2);
      }
    } else {
      setErrorMessage("Please select an operation.");
    }
  };

  const handleAddition = () => {
    setOperation("+");
    if (validateInputs()) {
      performOperation();
    }
  };

  const handleSubtraction = () => {
    setOperation("-");
    if (validateInputs()) {
      performOperation();
    }
  };

  const handleMultiplication = () => {
    setOperation("*");
    if (validateInputs()) {
      performOperation();
    }
  };

  const handleDivision = () => {
    setOperation("/");
    if (validateInputs()) {
      performOperation();
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input
        placeholder="Num 1"
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        placeholder="Num 2"
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <br />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {result && <div style={{ color: "green" }}>Result: {result}</div>}
    </div>
  );
}

export default Calculator;
