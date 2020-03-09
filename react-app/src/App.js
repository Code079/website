import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <div class="viewone">
        <Header />
      </div>
      <div class="viewtwo">
        <Body />
      </div>
    </div>
  );
}

export default App;
