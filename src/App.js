import React, { useState } from 'react';
import Weater from './components/Weater';
import Time from './components/Time';
import Counter from './components/Counter';


const App = () => {
    


    return (
        <>
        <div className="container my-5 ">
        <h2 className="text-warning my-4">Current Date and Time Project</h2>
        <Time setTime={Date()} />
        </div>
        <hr />
        <div className="container my-5">
            <h2>Counter Project</h2>
        <Counter />
        </div>
        <hr />
       <div className="container my-5 shadow imgbg">
           <h2 className="text-center pt-5">Weather Project</h2>
           <Weater />
       </div>
        </>
    )
}

export default App
