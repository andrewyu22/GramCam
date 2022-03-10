import "./App.css";
import Nav from "./components/Nav";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <Signup />
    </div>
  );
}

export default App;
