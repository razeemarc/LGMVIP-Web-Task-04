import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calcValue, setCalcValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (displayValue === '0' || displayValue === 'Error') {
      setDisplayValue(String(num));
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      calculate();
    }
    setCalcValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue('0');
  };

  const calculate = () => {
    const currentValue = parseFloat(displayValue);
    switch (operator) {
      case '+':
        setDisplayValue((calcValue + currentValue).toString());
        break;
      case '-':
        setDisplayValue((calcValue - currentValue).toString());
        break;
      case '*':
        setDisplayValue((calcValue * currentValue).toString());
        break;
      case '/':
        if (currentValue === 0) {
          setDisplayValue('Error');
        } else {
          setDisplayValue((calcValue / currentValue).toString());
        }
        break;
      default:
        break;
    }
    setCalcValue(null);
    setOperator(null);
  };

  const handleEquals = () => {
    if (operator) {
      calculate();
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setCalcValue(null);
    setOperator(null);
  };

  return (
   <div className='project'>
  
    <div className="calculator">
     
      <div className="display">{displayValue }</div>
      <div className="button-container">
        <button className="number-button"  onClick={handleNumberClick.bind(null, 1)}>1</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 2)}>2</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 3)}>3</button>
        <button className="operator-button" onClick={handleOperatorClick.bind(null, '+')}>+</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 4)}>4</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 5)}>5</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 6)}>6</button>
        <button className="operator-button" onClick={handleOperatorClick.bind(null, '-')}>-</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 7)}>7</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 8)}>8</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 9)}>9</button>
        <button className="operator-button" onClick={handleOperatorClick.bind(null, '*')}>*</button>
        <button className="number-button" onClick={handleNumberClick.bind(null, 0)}>0</button>
        <button className="operator-button" onClick={handleEquals}>=</button>
        <button className="operator-button" onClick={handleOperatorClick.bind(null, '/')}>/</button>
        <button className="clear-button" onClick={handleClear}>C</button>
      </div>
    </div>
    </div>
  );
};

export default App;
