import logo from './logo.svg';
import './App.css';
import Button from './Button'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button name='Learn React' type='success'/>
      </a>
    </header>
  </div>
);

export default App;
