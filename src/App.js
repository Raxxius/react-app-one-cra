import './App.css';
import { useEffect, useState } from "react";

function App() {
 const [colour, setColour] = useState("green")

  return (
    <div className="App" style={{backgroundColor : colour}}>
      <h1>React App1</h1>
    </div>
  );
}

export default App;
