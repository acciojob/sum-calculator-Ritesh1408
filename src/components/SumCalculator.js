import React, { useEffect, useState } from 'react';

const SumCalculator = () => {
  const [sum, setSum] = useState(15);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const value = parseInt(inputValue, 10);
      if (!isNaN(value)) {
        setSum(prevSum => prevSum + value);
        setInputValue('');
      }
    }, 300); 

    return () => clearTimeout(timeout); 
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
