import React from 'react';
import "../Person/Person.css";



const person = ( props ) => {
    return (
        <div className="Person">
            <p>Im {props.name} and I am {props.age} years Old!</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <button className="deleteBtn" onClick={props.click}>Delete</button>
        </div>
    )
    
    
};

export default person;