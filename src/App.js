import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import Timer from './components/Timer';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Create an instance of URLSearchParams
    const urlParams = new URLSearchParams(queryString);

    // Get the 'time' parameter
    const timeParam = urlParams.get('time');

    console.log(timeParam);

    // If the time parameter is present, parse it and set it to state
    if (timeParam) {
      setTime(parseInt(timeParam, 10));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' width={720} />
        <p>REX WILL BE BACK IN</p>
        <Timer time={time} />
      </header>
    </div>
  );
}

export default App;
