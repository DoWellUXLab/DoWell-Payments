import { useState } from "react";
import Home from "./Components/home"
import Verify from "./Components/verify";

function App() {

  return (
    <div className="grid grid-cols-2">
      <Home />
      <Verify />
    </div>
  );
}

export default App;
