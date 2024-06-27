import React, { useState } from 'react';
import './PercentageIncreaseCalculator.css';

const PercentageIncreaseCalculator = () => {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [percentageIncrease, setPercentageIncrease] = useState(null);
  const [explanation, setExplanation] = useState('');

  const calculatePercentageIncrease = () => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    if (!isNaN(initial) && !isNaN(final) && initial !== 0) {
      const increase = ((final - initial) / initial) * 100;
      setPercentageIncrease(increase.toFixed(2));
      setExplanation(`The percentage increase from ${initial} to ${final} is calculated by the formula:
      ((final value - initial value) / initial value) * 100.
      Therefore, (( ${final} - ${initial} ) / ${initial}) * 100 = ${increase.toFixed(2)}%.`);
    } else {
      setPercentageIncrease(null);
      setExplanation('Please enter valid numbers for both values.');
    }
  };

  return (
    <div className="calculator-container">
      <h1>Percentage Increase Calculator</h1>
      <div className="input-group">
        <label>Initial Value:</label>
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Final Value:</label>
        <input
          type="number"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
        />
      </div>
      <button onClick={calculatePercentageIncrease}>Calculate</button>
      {percentageIncrease !== null && (
        <div className="result">
          <h2>Result: {percentageIncrease}%</h2>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default PercentageIncreaseCalculator;
