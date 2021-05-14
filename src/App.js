import React, {useEffect, useState} from 'react';
import Home from "./Home";
import { Redirect} from "react-router-dom";

function App(props) {
    console.log(props)
    console.log(props.match.params.page)

    const [page, setPage] = useState(0);


    useEffect( () => {
        if(typeof props.match.params.page === "undefined") {
            console.log("it is undefined")

            setPage(
                0
            )
            console.log(page)

        } else {
            const parsed = parseInt(props.match.params.page, 10);
            if (!isNaN(parsed)) {
                setPage(
                    parsed
                )
            } else {
                <Redirect to="/"/>
                console.log("redirecting")

            }
        }

        }, []);

    console.log('rendering home')

        return (
    <div className="App">
        {/*{props.children}*/}
      <Home type={props.type} page={page}/>
    </div>
  );
}

export default App;
