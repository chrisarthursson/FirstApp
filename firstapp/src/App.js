import logo from './PIVX-Logo.png';

import './App.css';
import { Content } from './components/Content'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="PIVX logo" padding="10"/>
      <Content />
    </div>
  );
}

export default App;
