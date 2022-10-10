import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Form.js';

function Employer (props) {
    const { data, edits } = props;
    const [formToggle, setFormToggle] = useState(false);
    return (
        <div>
            {/* Iterate over data keys
            and render below for each key */
            Object.keys(data).map((employer) => {
                return (
                <div key={Math.random()} className="employer">
                    <h3>{data[employer].company}</h3>
                    <h3>{data[employer].position}</h3>
                    <h3>{data[employer].datesWorked}</h3>
                    <ul>
                        {data[employer].duties.map((duty) => {
                            return <li key={uniqid()}>{duty}</li>
                        })}
                    </ul>
                </div>
                )
            })}
            {formToggle == true ?
            <Form edits={edits} />
            :
            <button onClick={() => setFormToggle(true)}>New +</button>  
            }
        </div>      
    )
}

export default Employer;

