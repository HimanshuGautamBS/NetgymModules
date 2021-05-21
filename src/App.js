import "./App.css";
import RequestTime from "./RequestTime";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import TimeInp from "./components/TimeInp";
function App() {
  return (
    <div className="App">
      <h3>Date Picker</h3>
      <RequestTime />
      <Toggle />
      <TimeInp />
      <Clock />
    </div>
  );
}

export default App;
