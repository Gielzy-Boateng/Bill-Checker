import { useState } from "react";

const Counter = () => {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setSteps(1);
  }

  const handleStepMinus = () => {
    if (steps > 1) setSteps(steps - 1);
  };
  const handleStepPlus = () => {
    if (steps < 10) setSteps(steps + 1);
  };
  const handleCountMinus = () => {
    setCount((c) => c - steps);
  };
  const handleCountPlus = () => {
    setCount((c) => c + steps);
  };
  const date = new Date("21 March 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="steps">
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        <span>Steps: {steps}</span>
      </div>
      <div className="count">
        <button onClick={handleCountMinus}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || steps !== 1 ? (
        <div className="container">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default Counter;
