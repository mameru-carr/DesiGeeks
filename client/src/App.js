import logo from './logo.svg';
import './App.css';
import dotenv from 'dotenv';
import { useState, useEffect } from 'react';

const dotenv_config = dotenv.config();

const env = process.env.REACT_ENV || 'development';
const api_base_uri = process.env.REACT_API_URI || 'http://localhost:5000/api';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/check')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	    <div className="App">
	      <h1>MERN Project</h1>
	      <p>Data from the server: {data}</p>
	    </div>
      </header>
    </div>
  );
}

export default App;
