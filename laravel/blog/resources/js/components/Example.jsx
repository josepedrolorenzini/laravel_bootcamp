// resources/js/components/Example.js
import React, { useState } from 'react';
import axios from 'axios';

function Example() {


    const [state , setState] = useState(0);

    return (
        <div className="container bg-orange-400">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">
                            I'm an example component!<br></br>
                            <button className="btn btn-danger" 
                            onClick={()=>{
                                setState(state+1);
                                console.log(state)
                            }} >click me</button>
                        </div>
                        {state}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
