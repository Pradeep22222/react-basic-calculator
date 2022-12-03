
import { useState } from 'react';
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  const [result, setResult] = useState("");
  const updateResult = (calcValue) => {
    setResult(calcValue)
  }
  console.log(result);
  return (
    <div className="app">
      <ButtonArea updateResult={updateResult}
      ></ButtonArea>
      <Display></Display>
    </div>
  );
}

export default App;
