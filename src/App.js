import React from 'react';
import Home from "./Home";

function App(props) {
  return (
    <div className="App">
      <Home type={props.type}/>
    </div>
  );
}

export default App;
