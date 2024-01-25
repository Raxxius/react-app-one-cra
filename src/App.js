import './App.css';
import { useEffect, useState } from "react";

function App() {
 const [colour, setColour] = useState("green")

 useEffect(() => {
  console.log(sessionStorage);
  setColour(sessionStorage.currentColour);

  // handleStorageChange function
  const handleStorageChange = () => {
    console.log("sessionStorage has changed")
    setColour(sessionStorage.currentColour);
  };

  // Event listener
  window.addEventListener("storage", handleStorageChange);
  console.log("event listener engaged");

  // Cleanup
  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}, []);

  return (
    <div className="App" style={{backgroundColor : colour}}>
      <h1>React App1</h1>
    </div>
  );
}

export default App;
