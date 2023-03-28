import { useState } from 'react';


function MinutesToHours(){
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  
  return (<>
  <h2>Minutes To Hours</h2>
  <div>
    <label htmlFor='minutes'>Minutes</label>
    <input 
      value={flipped ? amount * 60 : amount}
      id="minutes"
      placeholder='Minutes'
      type="number"
      onChange={onChange}
      disabled={flipped}></input>
  </div>
  <div>
    <label htmlFor='hours'>Hours</label>
    <input 
      value={flipped ? amount : Math.round(amount / 60)}
      id="hours"
      placeholder='Hours'
      type="number"
      onChange={onChange}
      disabled={!flipped}></input>
  </div>
  <button onClick={reset}>Reset</button>
  <button onClick={onFlip}>flip</button>

  </>);
}

function KgToG(){
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  
  return (<>
    <h2>Kg To gram</h2>
    <div>
      <label htmlFor='kiloGram'>kiloGram</label>
      <input 
        id='kiloGram' 
        type="number" 
        placeholder='kilogram'
        onChange={onChange}
        value={flipped ? amount / 1000 : amount}
        disabled={flipped}></input>
    </div>
    <div>
      <label htmlFor='gram'>Gram</label>
      <input 
        id='gram' 
        type="number" 
        placeholder='gram'
        value={flipped ? amount : amount * 1000}
        onChange={onChange}
        disabled={!flipped}></input>
    </div>
    <button onClick={reset}>Reset</button>
    <button onClick={onFlip}>Flip</button>
    </>)}

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  }
  return (<>
  <h1>Converter</h1>
  <select value={index} onChange={onSelect}>
    <option value="0">Select U Want</option>
    <option value="1">Minutes & Hours</option>
    <option value="2">Kg & g</option>
  </select>
  <hr />
  {index === "0" ? "Time or weight" : null}
  {index === "1" ? <MinutesToHours /> : null}
  {index === "2" ? <KgToG /> : null}
  </>);
}

export default App;
