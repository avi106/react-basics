import React from 'react';
import "../Person/Person.css";

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Im {props.name} and I am {props.age} years Old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.click}>Delete</button>
        </div>
    )
    
    
};

export default person;