import React from 'react';

function Employer ({ details }) {
    return (
        <div>
            <h3>{details.position}</h3>
            <h3>{details.company}</h3>
            <h3>{details['Dates Worked']}</h3>
            <ul>
                {details.duties.map((duty) => {
                    return <li>{duty}</li>
                })}
            </ul>
        </div>
        
    );
};

export default Employer;

