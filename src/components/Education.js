import React from 'react';
import uniqid from 'uniqid';

function Education (props) {
    const education = props.education;
    return (
    <div>
        
        <h3>Education</h3>
        {Object.keys(education).map((institution) => {
            return (
                <div key={uniqid()}>
                    <h4>{education[institution].graduation}</h4>
                    <h4>{education[institution].almaMater}</h4>
                    <p>{education[institution].attended}</p>
                </div>
        )
        })}
        <button id="education" onClick={props.showForm}>+ New Education</button>    
    </div>
)}

export default Education;