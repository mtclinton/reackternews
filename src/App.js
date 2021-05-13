import React from 'react';
import Home from "./Home";

function App(props) {
    console.log(props)

  return (
    <div className="App">
        {/*{props.children}*/}
      <Home type={props.type} page={props.match.params.page}/>
    </div>
  );
}

export default App;
