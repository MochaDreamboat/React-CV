import React, { Component } from "react";
import Position from "./Position.js";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pastJobs } = this.props;
        
    return (
        <ul>
            {pastJobs.map((employer) => {
                return ( 
                <li>
                    <h3>{employer.name}</h3>
                    <h3>{employer.years}</h3>
                    {employer.positions.map((position) => {
                        return <Position position={position} />
                    })}
                </ li>
                )})}
        </ul>
    )
    }
}

export default Experience;


    // employerObj = {
    //     title: Legends;
    //     years: '2000-2001';
    //     positions: [{role: Bartender, responsibilities: ['Duties 1', 'Duties 2']}, ...]
    // }
