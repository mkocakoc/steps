import { useState } from "react";

const message = [
  "Step 1, world!",
  "Step 2: Learn React",
  "Awesome! You're ready to learn React!"
];

export default function App() {
  const [steps, setSteps] = useState(1); 
  console.log(steps);

  function previousFunc() {
    setSteps(prevSteps => (prevSteps > 1 ? prevSteps - 1 : prevSteps));
  }

  function nextFunc() {
    setSteps(prevSteps => (prevSteps < 3 ? prevSteps + 1 : prevSteps)); 
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${steps >= 1 ? 'active' : ""}`}>1</div>
        <div className={`${steps >= 2 ? 'active' : ""}`}>2</div>
        <div className={`${steps >= 3 ? 'active' : ""}`}>3</div>
      </div>

      <p className="message">Steps {steps}: {message[steps - 1]}!</p>
      <div className="buttons">
        <button style={{ background: "#7950f2", color: "#fff" }} onClick={previousFunc}>Prev</button>
        <button style={{ background: "#7950f2", color: "#fff" }} onClick={nextFunc}>Next</button>
      </div>
    </div>
  );
}
