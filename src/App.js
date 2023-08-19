import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function handleIncreaseStep() {
    if (step >= 1) setStep((step) => step + 1);
  }
  function handleDecreaseStep() {
    if (step >= 1) setStep((step) => step - 1);
  }
  function handleIncreaseCount() {
    setCount((count) => count + step);
  }
  function handleDecreaseCount() {
    setCount((count) => count - step);
  }
  return (
    <div>
      <div className="step">
        <button onClick={handleDecreaseStep}> - </button>
        Step : {step}
        <button onClick={handleIncreaseStep}> + </button>
      </div>
      <div className="count">
        <button onClick={handleDecreaseCount}> - </button>
        Count : {count} <button onClick={handleIncreaseCount}> + </button>
      </div>
      <p>
        {" "}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>{" "}
      </p>
    </div>
  );
}
