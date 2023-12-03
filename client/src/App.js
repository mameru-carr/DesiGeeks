import logo from './logo.svg';
import './App.css';
import dotenv from 'dotenv';

const dotenv_config = dotenv.config();

const env = process.env.REACT_ENV || 'development';
const api_base_uri = process.env.REACT_API_URI || 'http://localhost:5000/api';

function App() {
  return (
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
