import React, { Component } from "react";
import Employer from "./Employer";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { employers, showForm } = this.props;
        
    return (
        <div>
            <h2>PROFESSIONAL EXPERIENCE</h2>
                {Object.keys(employers).map((employer) => {
                    return <Employer details={employers[employer]} />
                })}
                <button id="experience" onClick={showForm}>+ New Employer</button>
        </div>
    );
    }
}

export default Experience;
