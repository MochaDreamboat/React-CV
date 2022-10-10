import React from 'react';
import uniqid from 'uniqid';

// import Form from './components/Form.js';
function Employer (props) {
    const { data } = props;
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

            <button>New +</button>
        </div>        
    )
}

export default Employer;

