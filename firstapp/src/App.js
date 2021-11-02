import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first app and I feel like a bloody beginner.
        </p>
        <a
          className="App-link"
          href="https://skill-ed.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Skill-ed
        </a>
      </header>
    </div>
  );
}

export default App;
