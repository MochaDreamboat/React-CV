import React from "react";

const Experience = (props) => {
    const { employers } = props;
    
    return (
        <ul>
            {employers.map((employer) => {
                return ( 
                <li>
                    <h3>{employer.title}</h3>
                    <h3>{employer.years}</h3>
                    {employer.positions.map((position) => {
                        return (
                        <div>
                            <p>{position.role}</p>
                            <p>{position.years}</p>
                            <ul>
                            {position.responsibilities.map((responsibility) => {
                                return (
                                        <li>{responsibility}</li>
                                )
                            })}
                            </ul>
                        </div>
            )})}

                </ li>
                )})}
        </ul>
    )
    
}

export default Experience;

// Employer
// Position 1
// Achievements 1
// Position 2
//Achievements 2

/*
    employerObj = {
        title: Legends;
        years: '2000-2001';
        positions: [{role: Bartender, responsibilities: ['Duties 1', 'Duties 2']}, ...]
    }

*/