import React from 'react';
import Calculator from './Calculator';
import PercentageIncreaseCalculator from './PercentageIncreaseCalculator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Calculator />
      <PercentageIncreaseCalculator />
    </div>
  );
};

export default App;
