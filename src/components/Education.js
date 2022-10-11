import React from 'react';
import uniqid from 'uniqid';

function Education (props) {
    const { info } = props;
    return (
    <div>
        
        <h3>Education</h3>
        {Object.keys(info).map((institution) => {
            return (
                <div key={uniqid()}>
                    <h4>{info[institution].graduation}</h4>
                    <h4>{info[institution].almaMater}</h4>
                    <p>{info[institution].attended}</p>
                </div>
        )
        })}   
    </div>
)}

export default Education;