import React from 'react';
import uniqid from "uniqid";

function Skills (props) {
    const { skills } = props;

    if (skills == []) {
        return (
            <span>Tell me about your skills!</span>
        )
    }

    return (
        <section id="skills">
            {skills.length ?
            skills.map((skill) => {
                return (
                    <div className="skill" key={uniqid()}>
                        <span>{skill}</span>
                    </div>
                )
            })
            :
            <p>Show me what you got</p>
            }
        </section>
    )
}

export default Skills;