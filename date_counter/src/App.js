import { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function resetHandler() {
    setCount(0);
    setStep(1);
  }

  const date = new Date('June 29 2023');
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>
        <h3>{date.toDateString()}</h3>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={resetHandler}>Reset</button>
          </div>
        ) : null}
      </span>
    </div>
  );
}
