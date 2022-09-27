import React from 'react';
import uniqid from 'uniqid';

function Employer ({ details }) {
    return (
        <div>
            <h3>{details.position}</h3>
            <h3>{details.company}</h3>
            <h3>{details['Dates Worked']}</h3>
            <ul>
                {details.duties.map((duty) => {
                    return <li key={uniqid()}>{duty}</li>
                })}
            </ul>
        </div>
        
    )
}

export default Employer;

