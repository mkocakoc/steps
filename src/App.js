const message =  [
  "Step 1 , world!",
  "Step 2: Learn React",
  "Awesome! You're ready to learn React!"
];

export default function App() {
  const steps = 1;

  function previusFnc() {
    steps > 1 ? steps - 1 : steps;
  }

  function nextFnc() {
    steps < 3 ? steps + 1 : steps;
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${steps >=  1 ?   'active': "" }`}>1</div>
        <div className={`${steps >=  2 ?   'active': "" }`}>2</div>
        <div className={`${steps >=  3 ?   'active': "" }`}>3</div>
      </div>

      <p className="message">Steps {steps} : {message [steps - 1]} !</p>
      <div className="buttons">
        <button style={{ background: "#7950f2", color: "#fff" }} onClick={previusFnc}>Prev</button>
        <button style={{ background: "#7950f2", color: "#fff" }} onClick={nextFnc}>Next</button>
      </div>
    </div>
  );
}