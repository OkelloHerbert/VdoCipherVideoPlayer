import React from "react";
import "./styles.css";
import HelloWorld from "./components/HelloWorld";

export default function App() {
  return (
    <div className="App">
      <img src="./assets/logo.png" alt="React logo" style={{ width: "25%" }} />
      <HelloWorld msg="VdoCipher ❤️ React JS!" />
    </div>
  );
}
