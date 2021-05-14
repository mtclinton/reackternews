import React, {useEffect, useState} from 'react';
import Home from "./Home";
import { Redirect} from "react-router-dom";

function App(props) {
    console.log("App: ",props)
    console.log(props.match.params.page)

        return (
    <div className="App">
        {/*{props.children}*/}
      <Home type={props.type} url={props.url}page={props.match.params.page}/>
    </div>
  );
}

export default App;
