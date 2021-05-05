import './App.css';
import CrudeOracleComponent  from './components/crude-oracle/crude-oracle.component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EM 2021 - Oracle</h1>
        <CrudeOracleComponent team_1="Germany" team_2="Switzerland"></CrudeOracleComponent>
      </header>

    </div>
  );
}

export default App;
