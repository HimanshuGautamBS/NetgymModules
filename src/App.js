import "./App.css";
import RequestTime from "./RequestTime";
import Clock from "./components/Clock";
function App() {
  return (
    <div className="App">
      <h3>Date Picker</h3>
      <RequestTime />
      <Clock />
    </div>
  );
}

export default App;
