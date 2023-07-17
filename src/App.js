import React, { useState } from "react";
import Classcompo from "./handsonone/Classcompo";
import Funtioncompo from "./handsonone/Functioncompo";
import "./App.css";
function App() {
  const [fState, setFState] = useState(false);
  const [cState, setCState] = useState(false);
  console.log(fState);

  return (
    <>
      <div id="mainheading">
        <h1>Styling using Functional and Class Components</h1>
      </div>

      <div className="buttondiv">
        <button onClick={() => setFState(!fState)}>
          To See Styling in function Components
        </button>

        <button onClick={() => setCState(!cState)}>
          To See Styling in Class Components{" "}
        </button>
      </div>
      <div id="bothbox">
        <div>{fState ? <Funtioncompo /> : " "}</div>
        <div>{cState ? <Classcompo /> : " "}</div>
      </div>
    </>
  );
}
export default App;
