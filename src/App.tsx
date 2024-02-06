import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const lightColors: String[] = ['red', 'yellow', 'green']

  function changeLight() {
    setCount((count + 1) % lightColors.length)
  }

  return (
    <>
      <div onClick={changeLight} className='stoplight-text'><h1>Click to Change light color.</h1></div>
      <div className="light-container">
        {lightColors.map((color, index) => (
            <div key={index} className={index === count ? 'light active ' + color : 'light ' + color}></div>
        ))}
      </div>
      
    </>
  )
}

export default App
