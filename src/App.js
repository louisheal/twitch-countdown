import './App.css';
import logo from './assets/logo.png';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' width={720} />
        <p>REX WILL BE BACK IN</p>
        <Timer time={1800} />
      </header>
    </div>
  );
}

export default App;
