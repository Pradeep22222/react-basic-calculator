
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  return (
    <div className="app">
      <ButtonArea></ButtonArea>
      <p>=</p>
      <Display></Display>
    </div>
  );
}

export default App;
