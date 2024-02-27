import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const lightColors: string[] = ['red', 'yellow', 'green'];

  function changeLight() {
    const newCount = count === 0 ? lightColors.length - 1 : count - 1;
    setCount(newCount);
  }

  return (
    <>
      <div onClick={changeLight} className="stoplight-text">
        <h1>Click to Change light color.</h1>
      </div>
      <div className="light-container">
        {lightColors.map((color, index) => (
          <div
            key={index}
            className={
              index === count ? 'light active ' + color : 'light ' + color
            }
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
