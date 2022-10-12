import React from 'react';
import uniqid from 'uniqid';

function Employer (props) {
    const { data } = props;
    return (
        <div>
            { Object.keys(data).length == 0 ?
            <p>Tell us where you worked.</p>
            :
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
            })
            }
        </div>      
    )
}

export default Employer;

